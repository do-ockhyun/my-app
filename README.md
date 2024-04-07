
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
### (auth/users)

### Profile
* id
* created_at

* username
* email
* avatar_url
* provider

* tags

### Post
* id
* created_at

* user_id
* title
* content
* is_published
* is_deleted (archive)

* likes
* tags

### Tag
* id
* created_at

* tag

### Comment
* id
* created_at

* user_id
* post_id
* content

* likes

### Reply
* id
* created_at

* user_id
* comment_id
* content

* likes

### Bookmark
* id
* created_at

* user_id
* post_id
* memo


