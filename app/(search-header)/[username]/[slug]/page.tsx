
const PostPage = ({ params }: { params: { slug: string } }) => {
    return ( <div>This Post Key is {params.slug}</div> );
}
 
export default PostPage;