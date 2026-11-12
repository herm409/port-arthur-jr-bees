import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found-page";
import { pageHead, titles } from "@/lib/seo";

export const Route = createFileRoute("/$")({
  head: () =>
    pageHead({
      title: titles.notFound,
      description: "That page is not on the Port Arthur Jr Bees site. Donate or join from here.",
      path: "/404",
      noindex: true,
    }),
  component: NotFoundPage,
});
