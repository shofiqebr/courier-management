import React, { useState } from 'react';
import { useCreateUser, useDeleteUser, useUpdateUser, useUsers } from '../../hooks/useUserCrud';


export default function AllUser() {
  const { data: users = [], isLoading } = useUsers();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateUser.mutate({ id: editingId, form });
    } else {
      createUser.mutate(form);
    }
    setForm({ name: '', email: '', role: '' });
    setEditingId(null);
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role });
    setEditingId(user._id);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure?')) {
      deleteUser.mutate(id);
    }
  };

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" />
        <select name="role" value={form.role} onChange={handleChange} className="border p-2 w-full">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
          <option value="customer">Customer</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? 'Update User' : 'Create User'}
        </button>
      </form>

      {/* User Table */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2 space-x-2">
                <button onClick={() => handleEdit(u)} className="px-2 py-1 bg-yellow-400 rounded">Edit</button>
                <button onClick={() => handleDelete(u._id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
