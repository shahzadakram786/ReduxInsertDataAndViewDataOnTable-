import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const users = useSelector((state) => state.users);

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">CRUD App with JSON Server</h2>
            <div className="text-center mb-3">
                <Link to="/create" className="btn btn-success">Create +</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            {/* Uncomment the following columns if you add Edit/Delete functionality */}
                            {/*<th>Actions</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.DoB}</td>
                                <td>{user.Age}</td>
                                {/* Uncomment the following actions if you add Edit/Delete functionality */}
                                {/*<td>
                                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </td>*/}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
