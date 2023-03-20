import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "../../axios";
import Loading from "../../components/Loading";
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            });
    }, []);

    if (loading) return <Loading />;
    if (users?.length == 0) return <h2 className="py-2 text-center">Пока что нет пользователей</h2>;

    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Id клиента</th>
                    <th>Имя клиента</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    return <div>Пользователи</div>;
}

export default UserList;
