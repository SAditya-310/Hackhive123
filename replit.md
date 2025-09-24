# Overview

HackHive is a disaster management education platform designed to provide comprehensive training and emergency preparedness through interactive learning modules, virtual drills, and gamification. The application combines educational content with practical emergency response training to help users develop critical disaster management skills.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modular JavaScript architecture with a main app container managing different educational modules. The frontend is organized around:
- **NavigationManager**: Handles routing between different sections of the platform
- **UserManager**: Manages user authentication state and profile data
- **Module System**: Separate modules for Dashboard, Learning, Drills, Emergency response, and Admin functionality
- **GameificationManager**: Implements point systems, badges, and progress tracking to encourage engagement

The UI follows a single-page application pattern with dynamic content loading and tab-based navigation for authentication flows.

## Backend Architecture
The backend is built with Node.js and Express, providing a RESTful API for user management:
- **Express Server**: Handles HTTP requests and serves static files
- **Authentication System**: Implements login/signup functionality with token-based authentication
- **Database Abstraction**: Designed to work with both MySQL and localStorage fallback for development flexibility

## Data Storage Solutions
The application uses a dual-storage approach:
- **Primary Database**: MySQL for production user data and progress tracking
- **Fallback Storage**: localStorage for client-side data persistence when database is unavailable
- **Session Management**: JWT tokens stored in localStorage for maintaining user sessions

## Authentication and Authorization
- **Role-based Access**: Supports different user roles (student, instructor, admin) with appropriate permissions
- **Token-based Authentication**: Uses JWT tokens for secure session management
- **Client-side State Management**: User data and authentication state managed through localStorage

## External Dependencies

### Database Systems
- **MySQL2**: Primary database driver for user data persistence
- **PostgreSQL (pg)**: Additional database support for potential future scaling

### Web Framework
- **Express.js**: Core web server framework
- **CORS**: Cross-origin resource sharing middleware for API access

### Development Tools
- **Nodemon**: Development server with auto-restart functionality
- **dotenv**: Environment variable management for configuration

### Frontend Libraries
- **Vanilla JavaScript**: Core frontend functionality without heavy frameworks
- **CSS3**: Modern styling with gradient backgrounds and responsive design

The architecture prioritizes modularity and educational effectiveness, with clear separation between different learning modules and a robust user management system that can scale from individual learning to classroom environments.