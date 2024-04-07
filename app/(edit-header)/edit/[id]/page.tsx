

const EditPostPage = ({ params}: {params: { id: string}}) => {
    return ( 
        <div>
            <h1>Edit Post Page - {params.id}</h1>
        </div>
     );
}
 
export default EditPostPage;