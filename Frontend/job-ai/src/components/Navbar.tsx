import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-orange-500 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white">
                    <Link href="/" className="hover:text-gray-200 transition">
                        JobAI
                    </Link>
                </h1>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/dashboard" className="text-white hover:text-gray-200 transition">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/upload" className="text-white hover:text-gray-200 transition">
                            Upload
                        </Link>
                    </li>
                    <li>
                        <Link href="/jobs" className="text-white hover:text-gray-200 transition">
                            Jobs
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;