
## Page
### (search-header)
- `/`
  * 홈화면 
  * app/(search-header)
- `/[username]`
  * 유저 프로필 
  * app/(search-header)/[username]
- `/[username]/[title]-[post-id]`
  * 포스트 읽기 

### (edit-header)
- `/new`
  * 포스트 쓰기 
- `/edit/[post-id]`
  * 포스트 편집 
  * (헤더를 무시할 수 있나요?)

### auth
- `/auth/login`
  * 로그인

## Database
* [db_schema.md](db_schema.md)

## Supabase
- `.env.local`
- `npm install @supabase/supabase-js`
- `npm install @supabase/ssr`

## API
`supabase gen types typescript --project-id [project-id] --schema public > supabase/types.ts`
