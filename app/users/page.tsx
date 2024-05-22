import Link from 'next/link';
import React from 'react'

interface Users {
    id: number;
    name: string;
    email: string
}

const UsersPage = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
    const users: Users[] = await result.json()


    return (
        <div className='text-black'>
            <h1>Users</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>

            </table>
            <Link href='/' className='btn btn-primary'>BACK</Link>
        </div>
    )
}

export default UsersPage