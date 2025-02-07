# Business Management Web App (Ongoing)

A comprehensive business management platform designed to streamline client interactions, project workflows, and financial operations. This monorepo project demonstrates expertise in building scalable, modern web applications with a focus on user experience and system integration.

### Key Features:

#### Technical Architecture
- **Monorepo Structure** using Turborepo for efficient workspace management
- **Type-safe Development** with TypeScript across all packages
- **Modern Build Tools** including Next.js 15 and Vite
- **Component Library** with reusable UI elements and Tailwind CSS

#### Frontend Implementation
- **Landing Page** with dynamic content management through Sanity CMS
- **Interactive Dashboard** for client order management and project tracking
- **Kanban Board** for visual project management and workflow optimization
- **Responsive Design** using Tailwind CSS for optimal viewing across devices

#### Backend Integration
- **Sanity CMS** for content management and dynamic page building
- **Cloudflare D1** database integration for robust data storage
- **Nitro API** for efficient data fetching and state management

#### Planned Features
- Client portal for order management
- Expense tracking system
- Financial analytics dashboard

### Technical Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **CMS**: Sanity.io
- **Database**: Cloudflare D1
- **API**: Nitro
- **Testing**: Vitest (planned)
- **Package Management**: pnpm
- **Build System**: Turborepo

### Project Structure

```
/apps
  /web     - Next.js frontend application
  /cms     - Sanity Studio instance
/packages
  /ui      - Shared UI components
  /sanity  - Sanity schema and types
  /tailwind - Shared Tailwind configuration
  /typescript - Shared TypeScript configuration
```

### Development Status

Currently in active development with a focus on implementing core features and establishing the technical foundation. The project follows modern development practices including:

- Strict type safety across all packages
- Component-driven development
- Continuous integration and deployment
- Performance optimization
- Accessibility compliance
