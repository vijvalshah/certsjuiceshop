# Cyscom Certificate Distribution Portal

A modern, hacker-themed web application for distributing certificates for the Cyscom Juice Shop CTF event. Built with React, TypeScript, and Tailwind CSS.

## Features

- Dynamic video background with hacker theme
- Fuzzy name matching for certificate retrieval
- Special animations for top 5 participants
- Responsive design with neon accents
- PDF certificate viewing and downloading
- Google Sheets integration for participant data

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Platform account (for Sheets API)

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cyscomcerts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_GOOGLE_SHEETS_API_ENDPOINT=your_google_sheets_api_endpoint
   VITE_CERTIFICATE_BASE_URL=your_certificate_base_url
   VITE_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
   ```

4. Add your background video:
   - Place your video file in the `public` directory
   - Update the `videoUrl` prop in `App.tsx`

5. Configure Google Sheets:
   - Create a Google Cloud Project
   - Enable Google Sheets API
   - Create credentials and get the API key
   - Set up your Google Sheet with columns: name, isTopFive, certificateId

## Development

Run the development server:
```bash
npm run dev
```

## Building for Production

Build the project:
```bash
npm run build
```

## Deployment

The project is configured for deployment on platforms like Vercel, Netlify, or Render. Follow these steps:

1. Push your code to a Git repository
2. Connect your repository to your chosen platform
3. Set up environment variables in the platform's dashboard
4. Deploy!

## Environment Variables

- `VITE_GOOGLE_SHEETS_API_ENDPOINT`: The endpoint for your Google Sheets API
- `VITE_CERTIFICATE_BASE_URL`: Base URL where certificates are stored
- `VITE_GOOGLE_SHEETS_API_KEY`: Your Google Sheets API key

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
