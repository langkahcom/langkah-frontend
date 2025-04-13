# Product Requirements Document (PRD)

## Product Description

**Langkah** is an AI-powered travel planning app that simplifies trip planning into a single prompt. It delivers a ready-made itinerary within seconds. 

## Problem Statement

Planning a trip is time-consuming and overwhelming for many travelers. Most apps require multiple steps, endless filtering, or signup before showing value. Users want **fast, intelligent, and low-effort planning**, not just another bloated travel app.

## Solution

Create a **lean, conversion-optimized web app** that:
- Uses AI to generate complete trip plans instantly
- Requires **no sign-up until after value is delivered**


## Core User Journey (UX Flow)

### Step 1: Landing Page
- 🎥 20-sec cinematic intro video
- ✅ CTA: “Try it Yourself”
- No sign-up required

### Step 2: Prompt Input
Design a split-screen into two intuitive columns. Where:

On the left-side, users can input their travel planner queries using natural language, (e.g., “5-day food tour in Tokyo in May”)

On the right-side, show world/country map using:
- 📌 Dotted Pins = AI-suggested POIs
- 🌀 Hover/click = Activity preview or brief details about the suggested location or experience
  
This layout allows users to engage both verbally and visually, creating an interactive and immersive trip planning flow.

### Step 3: Soft Sign-Up Prompt
- Modal after plan is shown: “Do you like it? Save your trip before it disappears!”
- Buttons: [Sign up with Google], [Continue without signing up]

## Features

### 🧠 AI Planning Engine
- GPT-powered itinerary generator
- Inputs: destination, dates, preferences
- Outputs: day-by-day plans with 3-5 activity suggestions

### 🎥 Video-First Landing Page
- Emotional hook via short demo
- Clean CTA to try the product

### 📦 Save & Share
- Trip can be saved post-login
- Sharable public trip page (v2)

## Monetization Strategy

- ✅ Affiliate commissions from bookings
- 🔒 Premium features (coming later):
  - Personalized AI re-planning
  - Offline access
  - Export to calendar / Google Maps

## Success Metrics

- ⏱ Time-to-value (from landing to trip shown): <15 seconds
- 🧪 Conversion to trip generation: >40%
- 💸 Booking conversion rate: >5%
- 👥 Sign-up after plan view: >25%
- 💰 Revenue per user (ARPU): Tracked monthly via affiliate APIs

## Tech Stack

- **Frontend:** React, Next.js, Tailwind
- **Backend:** Node.js (for API integration)
- **AI Layer:** OpenAI / Claude (for itinerary gen)
- **Data:** Supabase (user + trip storage)
- **Affiliates:** GetYourGuide, Viator, Klook APIs
