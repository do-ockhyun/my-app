
const ProfilePage = ({ params }: { params: { username: string } }) => {
    return ( <div>{params.username}'s Profile page</div> );
}
 
export default ProfilePage;