export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-bg/70 backdrop-blur-md">
      <div className="container-shell py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © 2026 Joshua Periabras. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
