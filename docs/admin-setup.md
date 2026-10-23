# Facilities admin and Firebase setup

This repository targets the Firebase project `facilities-50219`. The tracked `.env.example` contains the public web-app configuration. Copy it to `.env.local` for local development and add your existing UploadThing token there. Never commit `.env.local`, UploadThing credentials, Firebase Admin service-account JSON or private keys.

## Firebase Authentication and Firestore
Enable only the Authentication providers actually used by the implemented customer and staff flows. Provision privileged roles through a trusted owner workflow; never let an unauthenticated/public client grant itself manager or administrator access.

Firestore rules must match the collections and fields actually used by the app. Enforce organization/property isolation in the database rules and trusted server operations. Do not broadly open access to fix permission errors. This document does not authorize deploying rules or changing Firebase console settings.

## Server-only admin configuration
If the current server-side admin access route is used, set a strong, private `ADMIN_PASSWORD` and the appropriate `FIREBASE_ADMIN_KEY` service-account JSON in local/deployment secret settings. Do not use a weak sample password in a public deployment. Never prefix these values with `NEXT_PUBLIC_`.

## UploadThing
Set `UPLOADTHING_TOKEN` privately in `.env.local` and the relevant deployment environment. Uploads must use the UploadThing route and only be described as successful after the server/provider confirms them. Do not move uploads to Firebase Storage or deploy Storage rules as an assumed step.

## Before QA
Verify the exact enabled providers, authorized roles and deployed Firestore rules against the implemented workflows. Test cross-organization access denial, request/work-order lifecycle, completion evidence, manager verification and real inspection scheduling. Do not treat configuration examples as proof that production services are configured.
