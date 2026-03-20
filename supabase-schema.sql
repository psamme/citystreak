create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text not null unique,
  username text not null unique,
  display_name text not null,
  stats jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.profiles enable row level security;

create or replace function public.handle_profiles_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute procedure public.handle_profiles_updated_at();

drop policy if exists "users can read their own profile" on public.profiles;
drop policy if exists "profiles are publicly readable" on public.profiles;
create policy "users can read their own profile"
on public.profiles
for select
using (auth.uid() = id);

drop policy if exists "users can insert their own profile" on public.profiles;
create policy "users can insert their own profile"
on public.profiles
for insert
with check (auth.uid() = id);

drop policy if exists "users can update their own profile" on public.profiles;
create policy "users can update their own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);
