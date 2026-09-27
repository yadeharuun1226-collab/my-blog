import Link from "next/link";
import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  href?: string;
};

export default function Card({ title, children, href }: CardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        {/* タイトルサイズを text-3xl から text-xl に小さくし、文字間隔とフォントウェイトを調整 */}
        <h2 className="mb-5 text-xl font-semibold tracking-tight text-slate-800">
          {title}
        </h2>
        {children}
      </div>

      {href && (
        <div className="mt-6 text-right">
          <Link
            href={href}
            className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors"
          >
            View Details
            <span className="ml-1 text-sm">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}