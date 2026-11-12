import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/join")({
  beforeLoad: () => {
    throw redirect({ to: "/register", replace: true, statusCode: 301 });
  },
  component: () => null,
});
