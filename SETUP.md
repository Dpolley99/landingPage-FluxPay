# Setup Instructions

## Image Setup

The images from Figma have been downloaded to: `C:\Users\debap\public\images\`

You need to move them to the project's public folder:

1. Copy the following files from `C:\Users\debap\public\images\`:
   - `hero-image.png`
   - `feature-1.png`
   - `feature-2.png`
   - `feature-3.png`
   - `cta-image.png`

2. Paste them into: `C:\FluxPay\Landing_Page\public\images\`

Alternatively, you can run this command in PowerShell (from the project root):

```powershell
Copy-Item -Path "C:\Users\debap\public\images\*" -Destination ".\public\images\" -Force
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

