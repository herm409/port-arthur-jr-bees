import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  beforeLoad: () => {
    throw redirect({ to: "/donate", replace: true, statusCode: 301 });
  },
  component: () => null,
});
