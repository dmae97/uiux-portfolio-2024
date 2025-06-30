# Personal Portfolio Website

## Overview

This is a personal portfolio website for an industrial automation engineer and AI developer, built with modern web technologies. The application showcases professional experience in PLC programming, AI integration, and innovative solutions for industrial automation. The site features a responsive design with dark mode support, smooth animations, and a comprehensive contact system.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend with TypeScript for type safety and better development experience. The architecture follows a component-based approach with:

- **Framework**: React 18 with TypeScript for component development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The backend is built with Express.js following a minimal REST API pattern:

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for HTTP server and middleware
- **Development**: Hot module replacement with Vite integration
- **Storage**: In-memory storage implementation with interface for future database integration

## Key Components

### UI Components
- **Theme System**: Dark/light mode toggle with system preference detection
- **Navigation**: Smooth scrolling navigation with mobile-responsive design
- **Animations**: Intersection observer-based animations for sections
- **Forms**: Contact forms with validation and submission handling
- **Typography**: Custom font loading (Noto Sans KR + Inter) for Korean/English content

### Sections
- **Hero**: Dynamic typing animation showcasing roles and expertise
- **Experience**: Timeline-based professional journey presentation
- **Skills**: Progress bars and categorized technical abilities
- **Projects**: Interactive project showcase with live demo links
- **Philosophy**: Core beliefs about AI-human collaboration
- **Vision**: Future goals and industry impact
- **Contact**: Multi-channel contact methods with clipboard integration

### Storage Layer
The application includes a storage abstraction layer that currently uses in-memory storage but can be easily extended to use PostgreSQL:

- **Interface**: IStorage defines CRUD operations for users
- **Implementation**: MemStorage provides in-memory user management
- **Schema**: Drizzle ORM schema definitions for PostgreSQL compatibility

## Data Flow

1. **Client Requests**: Users interact with the React frontend
2. **API Communication**: Frontend communicates with Express backend via REST APIs
3. **Data Processing**: Backend processes requests and interacts with storage layer
4. **Response Handling**: Data flows back through the API to update the UI
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Framework**: @radix-ui components for accessible UI primitives
- **Animation**: framer-motion for smooth animations
- **Query Management**: @tanstack/react-query for server state
- **Styling**: tailwindcss, class-variance-authority, clsx for styling
- **Form Handling**: @hookform/resolvers for form validation
- **Icons**: lucide-react for consistent iconography

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-zod for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Utilities**: nanoid for unique ID generation

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **Replit Integration**: @replit/vite-plugin-cartographer for development environment
- **TypeScript**: Full TypeScript support with strict configuration

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development**: `npm run dev` starts the development server with hot reload
- **Build**: `npm run build` creates optimized production build
- **Production**: `npm start` runs the production server
- **Database**: `npm run db:push` applies schema changes to PostgreSQL

The build process:
1. Vite builds the React frontend to `dist/public`
2. esbuild bundles the Express server to `dist/index.js`
3. Static files are served from the build directory
4. API routes are prefixed with `/api`

## Changelog

- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.