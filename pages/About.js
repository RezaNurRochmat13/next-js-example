const About = ({ users }) => {
    return( 
        <div>
            {users.map((value, index) => {
                return (
                    <div>
                        <li>{value.name}</li>
                        <li>{value.username}</li>
                    </div>
                )
            })}
        </div>
    )
};

export async function getServerSideProps() {
    const endpoint = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await endpoint.json();

    return {
        props: {
            users
        }
    }
};

export default About;