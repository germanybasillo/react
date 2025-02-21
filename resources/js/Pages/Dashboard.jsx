import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Plus } from "lucide-react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={
            <div className="flex justify-between items-center">
                   {auth.user.role === "admin" ? (
                        <h2 className="font-semibold text-xl text-white leading-tight">
                            Admin Dashboard
                        </h2>
                    ) : (
                        <h2 className="font-semibold text-xl text-white leading-tight">
                            User Dashboard
                        </h2>
                    )}
                {auth.user.role === "user" ? (
    <a
        href="#"
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 flex items-center gap-2"
    >
        <Plus size={18} />
        Assessment
    </a>
) : null}  {/* If the user is not a "user", render nothing */}

            </div>
        }
    >
            <Head title="Dashboard" />
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-blue-200">
                <thead className="bg-white text-white w-full h-20 rounded-lg border border-blue-700 shadow-lg">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[...Array(4)].map((_, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    <div className="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane.cooper@example.com</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
