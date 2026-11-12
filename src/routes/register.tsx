import { createFileRoute } from "@tanstack/react-router";
import { JoinCard } from "@/components/join-card";
import { MedicalFormBlock } from "@/components/medical-form";
import { pageHead, titles } from "@/lib/seo";

export const Route = createFileRoute("/register")({
  head: () =>
    pageHead({
      title: titles.join,
      description:
        "Join Port Arthur Jr Bees football or Honeybees dance. Football sign-ups start in January. Call Coach Brad or Coach Rayya.",
      path: "/register",
    }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <h1 className="font-display text-6xl font-extrabold uppercase text-ink">Join</h1>
      <p className="mt-4 text-xl text-stone">
        Call or text first. Then fill out this season's medical form.
      </p>
      <div className="mt-10">
        <JoinCard />
      </div>
      <MedicalFormBlock />
    </article>
  );
}
