create table if not exists public.run_progress (
  user_key text not null,
  run_id text not null,
  done boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_key, run_id)
);

alter table public.run_progress enable row level security;

drop policy if exists "anon can read run progress" on public.run_progress;
drop policy if exists "anon can insert run progress" on public.run_progress;
drop policy if exists "anon can update run progress" on public.run_progress;

create policy "anon can read run progress"
on public.run_progress
for select
to anon
using (true);

create policy "anon can insert run progress"
on public.run_progress
for insert
to anon
with check (true);

create policy "anon can update run progress"
on public.run_progress
for update
to anon
using (true)
with check (true);
