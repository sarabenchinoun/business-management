# Business Management Project Guidelines

## Project Stack

*   **Framework:** Tanstack Router, NextJS, TypeScript, React 19, Node.js
*   **Backend:** Nitro.js, Cloudflare (D1/KV), Drizzle ORM, Effect TS
*   **UI:** Base UI, Tailwind CSS, tailwind-variants
*   **Key Libraries:** TanStack Query, Zod, Phosphor Icons, Better Auth, Faker JS, MSW, OFetch
*   **Focus:** Code clarity, readability, best practices, maintainability, performance
*   **Package Manager:** pnpm

## Project Structure
```
/apps
  /web
    /app
      /routes # All Routes 
      /components # global components 
      /lib # global api calls & Queries
      /styles # TailwindCSS declaration file
      /utils # Global helper functions
  /api
    /server
      /api # all api routes
      /db # DB Migrations and schema declarations
      /middleware # Global middleware
      /plugins # Global plugins
      /utils # Global helper functions
/packages
  /api-client # API Client
  /ui # UI Components
  /utils # Utility functions
  /typescript # TypeScript Config
  /tailwind # Tailwind Config
  /mock-db # Mock DB for testing & development
  /schemas # Zod Schemas
```

## Core Principles

### Data Flow (React Query)

1.  **Component Data Fetching:**
    *   Use React Query for all data fetching.
    *   Implement loading states with `Suspense` or `useQuery`'s `isLoading` state.  Prefer `Suspense` for a better user experience.
    *   Define query options in `queryOptions`.
    *   Create separate API call functions with Zod schema validation.

    ```tsx
    // Example:
    import { queryOptions, useQuery, useSuspenseQuery } from '@tanstack/react-query';
    import { z } from 'zod';
    import { NoteSchema } from '@andragog/schemas'; // Import schema
    import { api } from '@andragog/api-client'; // Import api client

    async function getNotes() {
      const response = await api.get('/api/notes');
      return z.array(NoteSchema).parse(response.data); // Validate with schema
    }

    const notesQuery = queryOptions({
      queryKey: ['notes'],
      queryFn: getNotes,
    });

    function Component() {
      const { data, isLoading } = useQuery(notesQuery); // For simple loading states

      if (isLoading) return <Skeleton />;
      return <NoteList notes={data} />;
    }

    function ComponentWithSuspense() {
      return (
        <Suspense fallback={<Skeleton />}>
          <NoteListSuspense />
        </Suspense>
      );
    }

    function NoteListSuspense() { // useSuspenseQuery for Suspense
      const { data } = useSuspenseQuery(notesQuery);
      return <NoteList notes={data} />;
    }

    function NoteList({ notes }: { notes: z.infer<typeof NoteSchema>[] }) { // Type the props
        return <ul>{notes.map(note => <li key={note.id}>{note.title}</li>)}</ul>;
    }
    ```

### Server Actions

*   Name files `[resource].action.ts` in the `apps/web/app/lib/` directory (or a subdirectory if appropriate).
*   Invalidate relevant queries using `meta.invalidateQueries` in `useMutation`.

```tsx
// Example:
// apps/web/app/lib/notes/create-note.ts
import { NoteSchema } from '@andragog/schemas';
import { api } from '@andragog/api-client';

export function createNote(input: z.infer<typeof NoteSchema>) {
  return await api.post(input);
}

// Example usage in React component:
import { useMutation } from '@tanstack/react-query';
import { createNote } from './create-note';
import { toast } from '@andragog/ui';

function CreateNoteButton() {
  const { mutate } = useMutation({
    mutationFn: createNote,
    meta: { invalidateQueries: ['notes'] }, // Invalidate after successful creation
    onSuccess: () => toast('Note created successfully!'),
    onError: (error) => toast.error('Failed to create note.'), // Handle errors
  });

  return <Button onClick={() => mutate({ title: 'New Note', content: '...', category: 'work' })}>Create Note</Button>;
}
```

## Database & Security
- Use Drizzle ORM for database interactions.
- Define Zod schemas for all data models and use them for validation on both the client and server.
- Implement proper authentication and authorization using Better Auth.
- Security Best Practices: Follow security best practices (e.g., input validation, parameterized queries, protection against common web vulnerabilities). Details to be documented separately.

## UI Components
- Reusable UI components reside in the @andragog/ui package.
- Export components from the package's index.ts (or equivalent) for easy import.
- Use tailwind-variants for styling components with variants and dynamic styling. 
- Use the cn utility function for merging Tailwind classes & improved styling capabilities.

## 1. Schema Definitions
```tsx
// schema/note.schema.ts
import * as z from 'zod';

export const NoteSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  category: z.enum(['work', 'personal']),
});
```

## Testing
- Use MSW for mocking API requests during development and testing.
- Write unit tests for components and utility functions.
- Write integration tests for pages.

## Creating Pages in /apps/web/app/routes

When creating new pages ensure:
- It has the `createFileRoute` function.
Example:
```tsx
import { createFileRoute } from '@tanstack/reacct-router';

export const Route = createFileRoute({
  head: () => ({
    title: 'Home Page',
     meta: [
      {
        meta: [
          { name: 'description', content: 'Home Page' },
        ],
      },
    ],
  }) 
  component: Component,
});

function Component() {
  return <div>Home Page</div>;
}
```

## Code Style
- Follow consistent code formatting using Biome.js, the file is in the root called `biome.json`.
- Use descriptive variable and function names.
- Prefer functional programming paradigms where appropriate.
- Write clear and concise comments where necessary.
- Function Declarations: Preferred over function expressions.
- Conditional Rendering (JSX): thing ? 'whatever' : null over thing && 'whatever'.
- TypeScript: Descriptive type names (no single-letter names). 
- Array generic syntax preferred (e.g., Array<string> over string[]). 
- Types should be included where helpful, relying on inference where possible. - Avoid explicit return types unless necessary.
- All React Components: Use Tailwind CSS for styling.
- Reusable/Dynamic Styles: Use tailwind-variants with the cn utility function. See example below:
```tsx
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type VariantProps, tv } from "tailwind-variants";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(...inputs));
}

export { cn, tv, type VariantProps };
```

```tsx
// In component file
import { cn, tv, type VariantProps } from '@andragog/ui';

const buttonVariants = tv({
  base: 'px-4 py-2',
  variants: {
    theme: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-200 text-gray-800',
    }
  },
  defaultVariants: {
    theme: 'primary',
  },
})

interface ButtonProps extends VariantProps<typeof buttonVariants>, React.ComponentProps<'button'> {
}

function Button({ variant, size, className, children, ...props }: ButtonProps ) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
```

## Example Interactions:
- User: Real-time updates (React/Node)?
- AI: WebSockets. Socket.IO. (Spec: Serverless?). Redis Pub/Sub. WebSockets are for...

- User: Optimize slow Node API?
- AI: Caching (Cloudflare KV). Profile queries. (Spec: Connection pool?). Indexing. Caching works by...

- User: New React state management?
- AI: Zustand. Lightweight. (Spec: Context API?). Evaluate performance. Zustand is for...

- User: React/Node auth?
- AI: Better Auth. Heres how you can...
