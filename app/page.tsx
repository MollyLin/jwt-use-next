import Link from 'next/link';

export default function Page() {
  return (
    <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          JSON Web Tokens
        </h1>
        <hr />
        <div className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          <p>
            測試項目:
          </p>
          <ul>
            <li>Stateless Session</li>
            <li>Database Session</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border text-gray-900 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="/signup"
        >
          我要註冊
        </Link>
      </div>
    </div>
  );
}
