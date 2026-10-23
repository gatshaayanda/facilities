# Facilities

A mobile-first facilities management and maintenance PWA for Botswana, designed for commercial properties, offices, schools, retail sites and hospitality facilities.

## Intended workflows
- Public service information and an enquiry path for prospective clients.
- Property, building/area and asset records for authorized organizations.
- Maintenance requests, triage, assignment, work-order updates and completion evidence.
- Manager verification and closure with an auditable status history.
- Preventive maintenance schedules, inspections, findings and follow-up work.
- Dashboards and reports derived from persisted operational records.
- Admin-managed landing-page content, services, FAQs, announcements and branding.

Do not treat a requested or planned capability as implemented until it is present and verified. This repository is still being adapted from its protected Africhiko foundation.

## Protected PWA foundation
The approved native installation flow and service-worker/offline behavior are protected. Keep the existing install lifecycle, install card, embedded-browser handling and iOS guidance intact while changing project branding. The existing chatbot behavior is also protected.

## Stack and integrations
- Next.js 15, React 19 and TypeScript
- Firebase Authentication and Cloud Firestore, configured for project `facilities-50219`
- UploadThing for media uploads (`UPLOADTHING_TOKEN` must be set privately)
- PWA installation and service-worker support
- Vercel Analytics and Speed Insights

## Local development
1. Install Node.js version from `.nvmrc`.
2. Copy `.env.example` to `.env.local` and confirm the Firebase values.
3. Add the UploadThing token you already created to `.env.local`.
4. Set a strong, private `ADMIN_PASSWORD` and configure `FIREBASE_ADMIN_KEY` only if the corresponding server-side admin workflow is being used.
5. Run `npm install`, then `npm run dev`.

Never commit `.env.local`, the UploadThing token, Firebase Admin service-account JSON or other private credentials. The Firebase web config can be present in client bundles; database access must be protected by Authentication and Firestore rules.

## Verification
Before QA, run `npx tsc --noEmit`, `npm run lint` and `npm run build` where the environment permits. Test the customer enquiry flow, authorized role boundaries, property isolation, work-order evidence and manager verification, scheduled inspection recurrence, and PWA installation/offline behavior. A successful push does not prove deployment.
