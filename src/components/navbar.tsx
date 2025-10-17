'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/tasks', label: 'Tasks' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="flex items-center space-x-3 group"
        >
          <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-sm">FT</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">
            FlowTask
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative font-medium text-gray-600 hover:text-gray-900 transition-all duration-300
                ${pathname === link.href ? 'text-gray-900 font-semibold' : ''}
              `}
            >
              {link.label}
              {pathname === link.href && (
                <div className="absolute -bottom-7 left-0 w-full h-0.5 bg-gray-900 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}