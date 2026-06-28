import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="text-[clamp(64px,12vw,140px)] font-black tracking-tighter text-gradient leading-none">
        404
      </p>
      <h1 className="mt-4 text-2xl font-extrabold">This page took a different route</h1>
      <p className="mt-3 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="mt-7">
        <Button>Back to Home</Button>
      </Link>
    </Container>
  );
}

export default NotFoundPage;
