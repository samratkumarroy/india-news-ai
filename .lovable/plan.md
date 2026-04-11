

# AI News Chatbot Widget

## What We're Building
A floating chat widget (bottom-right corner) where readers can ask questions about news articles and get AI-powered answers grounded in your site's content.

## How It Works
1. User clicks a chat bubble icon to open a chat panel
2. User types a question (e.g., "What happened with GPT-5?" or "Latest Delhi news")
3. The app sends the question along with all article content to an AI model via a Supabase Edge Function
4. AI responds with answers sourced from your articles, with streaming text display

## Technical Plan

### 1. Create Supabase Edge Function (`supabase/functions/chat/index.ts`)
- Receives user messages from the frontend
- Injects all article content as system context so the AI answers only from your news
- Calls Lovable AI Gateway (`google/gemini-3-flash-preview`) with streaming enabled
- Returns SSE stream to the client

### 2. Create Chat Widget Component (`src/components/AIChatWidget.tsx`)
- Floating button (bottom-right) with a chat icon
- Expandable chat panel with message history
- Input field for questions
- Streaming response display with markdown rendering
- Mobile-responsive design matching the site's newspaper theme

### 3. Create Chat Hook (`src/hooks/useChat.ts`)
- Manages conversation state (messages array)
- Handles SSE streaming from the edge function
- Loading/error states

### 4. Add Widget to Index Page
- Import and render `AIChatWidget` in `Index.tsx`

### Dependencies
- `react-markdown` for rendering AI responses with formatting

### Design
- Dark themed to match the site's ink/saffron color scheme
- Compact overlay that doesn't interfere with news reading
- "Ask about the news" placeholder text

