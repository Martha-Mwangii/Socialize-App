# Socialize

Socialize is a simple social media application built with React. It allows users to create posts, like posts, add comments, and manage notifications.  


## Features

- **Home Page**: Displays a welcome message and an image.
- **News Feed**: Users can create posts, like posts, and add comments.
- **Notifications**: Users can view and remove notifications.
- **Profile**: Displays user profile information, including followers and following counts.

## Components

### App
- The root component that manages routing and state for the application.

### Navbar
- Provides navigation links to different parts of the application (Home, News Feed, Notifications, Profile).

### Home
- Displays a welcome message and an image.

### NewsFeed
- Manages the list of posts.
- Contains the `CreatePost` component for adding new posts.
- Renders multiple `Post` components.

### CreatePost
- Provides a form for users to create new posts.

### Post
- Displays a single post with its content, author, likes, and comments.
- Contains the `CommentsSection` component for managing comments.

### CommentsSection
- Manages the list of comments for a post.
- Contains the `Comment` component for displaying individual comments.
- Contains the `AddComment` component for adding new comments.

### Comment
- Displays a single comment with a remove button.

### AddComment
- Provides a form for users to add new comments.

### Notifications
- Manages the list of notifications.
- Renders multiple `NotificationItem` components.

### NotificationItem
- Displays a single notification with a remove button.

### UserProfile
- Displays the user's profile information.
- Contains the `ProfileHeader` component for displaying the user's avatar, name, and bio.

### ProfileHeader
- Displays the user's avatar, name, and bio.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
 
