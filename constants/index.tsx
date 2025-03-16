import { Icons } from "@/components/shared/icons";

export const technologies = [
  {
    icon: <Icons.nextjs className="h-8 w-8" />,
    name: "Next.js",
    description:
      "A framework for React that enables server-side rendering and effortless deployment.",
    link: "https://nextjs.org/",
  },
  {
    icon: <Icons.code2 className="h-8 w-8" />,
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that enhances code maintainability and scalability.",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <Icons.tailwind className="h-8 w-8" />,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for building custom designs with ease.",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <Icons.shadcn className="h-8 w-8" />,
    name: "Shadcn UI",
    description:
      "Beautifully designed components that enhance your application's user interface.",
    link: "https://ui.shadcn.com/",
  },
  {
    icon: <Icons.trpc className="h-8 w-8" />,
    name: "tRPC",
    description:
      "End-to-end typesafe APIs made easy with React and TypeScript.",
    link: "https://trpc.io/",
  },
  {
    icon: <Icons.lock className="h-8 w-8" />,
    name: "Better-auth",
    description:
      "Modern authentication solution for Next.js applications with enhanced security.",
    link: "https://better-auth.com/",
  },
  {
    icon: <Icons.layers className="h-8 w-8" />,
    name: "Drizzle",
    description: "TypeScript ORM that's lightweight, performant and type-safe.",
    link: "https://orm.drizzle.team/",
  },
  {
    icon: <Icons.creditCard className="h-8 w-8" />,
    name: "Stripe",
    description:
      "Powerful and flexible tools for internet commerce and online payments.",
    link: "https://stripe.com/",
  },
  {
    icon: <Icons.test className="h-8 w-8" />,
    name: "Testing",
    description:
      "Comprehensive testing using Jest for unit tests and Cypress for end-to-end testing to ensure code reliability and performance.",
    link: "https://jestjs.io/",
  },
];

export const Authentication = [
  {
    icon: <Icons.lock className="h-8 w-8" />,
    title: "Ready to use components and views",
    description:
      "Pre-built authentication components and pages that match your brand's unique style.",
  },
  {
    icon: <Icons.email className="h-8 w-8" />,
    title: "Email/password authentication",
    description:
      "Traditional email/password authentication with secure password hashing and salting.",
  },
  {
    icon: <Icons.magicLink className="h-8 w-8" />,
    title: "Magic Links",
    description:
      "A passwordless authentication method that sends a secure link to the user's email.",
  },
  {
    icon: <Icons.key className="h-8 w-8" />,
    title: "Password Recovery",
    description:
      "Forgot password functionality that allows users to reset their password securely.",
  },
  {
    icon: <Icons.google className="h-8 w-8" />,
    title: "Social Authentication",
    description: "Sign in with Google, Facebook, Twitter, and more.",
  },
  {
    icon: <Icons.shield className="h-8 w-8" />,
    title: "2FA",
    description: "Two-factor authentication for an extra layer of security.",
  },
];

export const Stripe = [
  {
    icon: <Icons.subscription className="h-8 w-8" />,
    title: "Subscription",
    description:
      "Recurring billing system supporting multiple plans, pricing tiers and usage metrics.",
  },
  {
    icon: <Icons.creditCard className="size-8" />,
    title: "One-time payment",
    description: "Securely accept one-time payments from your customers.",
  },
  {
    icon: <Icons.invoice className="h-8 w-8" />,
    title: "Billing components",
    description:
      "Pre-built billing components that can be easily integrated into your application.",
  },
  {
    icon: <Icons.settings className="size-8" />,
    title: "Customer plans",
    description: "Manage customer subscriptions and billing information.",
  },
];

export const API = [
  {
    title: "Type-safe API",
    description: "End-to-end type safety for API calls using TypeScript.",
    icon: <Icons.code2 className="size-8" />,
  },
  {
    title: "Serverless Ready",
    description:
      "Optimized for serverless deployments with fast response times.",
    icon: <Icons.server className="size-8" />,
  },
  {
    title: "Automatic Code Completion",
    description:
      "Full autocompletion support in API calls for a seamless developer experience.",
    icon: <Icons.wand className="size-8" />,
  },
  {
    title: "Middleware Support",
    description:
      "Powerful middleware support for handling authentication, logging, and validation.",
    icon: <Icons.layers />,
  },
  {
    title: "Input Validation",
    description: "Built-in Zod validation for API inputs and responses.",
    icon: <Icons.shield />,
  },
  {
    title: "Query & Mutation",
    description:
      "Simplified API structure with queries and mutations for data fetching and manipulation.",
    icon: <Icons.shuffle className="size-8" />,
  },
  {
    title: "Full Stack Integration",
    description:
      "Works seamlessly with Next.js, React, and other modern web frameworks.",
    icon: <Icons.globe className="size-8" />,
  },
  {
    title: "Efficient Data Fetching",
    description: "Optimized API calls with caching and automatic invalidation.",
    icon: <Icons.bolt className="size-8" />,
  },
];

export const Email = [
  {
    icon: <Icons.email className="h-8 w-8" />,
    title: "React Email Integration",
    description:
      "Build and customize your emails using React Email's component-based approach.",
  },
  {
    icon: <Icons.check className="h-8 w-8" />,
    title: "Reliable Delivery",
    description:
      "Powered by Resend, your emails are delivered with high reliability and inbox placement.",
  },
  {
    icon: <Icons.puzzle className="h-8 w-8" />,
    title: "Customizable Templates",
    description:
      "Design responsive and dynamic email templates that adapt to your brand.",
  },
  {
    icon: <Icons.code2 className="h-8 w-8" />,
    title: "Easy Integration",
    description:
      "Seamlessly integrate email services into your Next.js application with minimal setup.",
  },
];

export const SEO = [
  {
    icon: <Icons.globe className="h-8 w-8" />,
    title: "Dynamic Meta Tags",
    description:
      "Auto-generated meta tags that optimize search engine visibility and enhance social sharing previews.",
  },
  {
    icon: <Icons.shield className="h-8 w-8" />,
    title: "Robots & Sitemap",
    description:
      "Customizable robots.txt and sitemap configurations to control crawling and boost indexing performance.",
  },
  {
    icon: <Icons.search className="h-8 w-8" />,
    title: "Structured Data",
    description:
      "Implement JSON-LD schema for enhanced search engine understanding and improved rich results.",
  },
];
