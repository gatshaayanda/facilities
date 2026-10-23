# Facilities — Project Operating Contract

## Product and source of truth
This is a Botswana facilities management and maintenance PWA for commercial properties, office complexes, schools, retail sites and hospitality facilities. The product owner is the final reviewer. Actual repository state, this file and project documentation are the source of truth.

## Protected foundation
- The approved Africhiko PWA installation implementation is protected. Preserve its native `beforeinstallprompt` lifecycle, user-click install action, dismissible branded card, responsive positioning, embedded-browser handling, iOS Safari guidance and service-worker behavior. Change identity, assets, colours and project-specific copy only unless the product owner explicitly authorizes an installation change.
- Preserve Africhiko's existing chatbot implementation and behavior. Rebrand and adapt wording only; do not replace or remove features.
- Keep changes focused and preserve existing working behavior.

## Product and operational safety
- Use facilities-appropriate public pages and real administrative workflows; do not inherit fabrication, car-wash, tourism or cleaning business claims.
- Admin-editable public content must persist. Do not claim a service, certification, compliance status or capability unless configured and verified.
- Operational dashboards must derive from persisted records, not hardcoded demonstration counts.
- Maintenance requests and work orders must keep status history. Technicians submit notes and completion evidence; an authorized manager verifies completion and closes work.
- Preventive maintenance recurrence must create real scheduled tasks, not merely display a recurrence label.
- Enforce role and organization/property isolation in trusted server/database rules, not only by hiding UI navigation. Client representatives must never read other clients' records.
- Never report a request saved, an upload completed, or a work order closed unless the operation actually succeeded. Provide validation, loading, empty, error and retry states.
- If offline edits are supported, show them as pending until the server confirms synchronization and prevent duplicate submissions on retries.

## Firebase and integrations
- The facilities Firebase project is `facilities-50219`. The public web configuration is represented by `NEXT_PUBLIC_FIREBASE_*` environment variables. Firebase web config is not a service-account secret; never commit `.env.local`, service-account JSON, private keys or other credentials.
- Use Firebase Authentication and Firestore according to the existing implementation and the project's authorized rules. Never open broad database access to work around a permission error. Do not deploy rules or configure the Firebase console without a concrete need and owner approval.
- Use UploadThing for media uploads. The actual `UPLOADTHING_TOKEN` belongs in local/deployment secret settings, never in a tracked file. Do not migrate uploads to Firebase Storage or change Storage rules as an assumed requirement.
- Admin password/access configuration is server-only. Never place it in a `NEXT_PUBLIC_*` variable. Replace example values before deployment. The Firebase Admin service-account value must remain server-only.
- Never reuse credentials, data, deployment identifiers or integrations from another project.

## Implementation and verification
- Prefer mobile-first usability, accessible controls, consistent neutral styling, and clear customer/technician/manager actions.
- Do not add payroll, accounting, emergency-response guarantees, regulatory certification or automated equipment control to v1.
- Before a meaningful checkpoint, run `npx tsc --noEmit`, `npm run lint` and `npm run build` when the environment permits. Report only checks actually run and their results.
- A GitHub push is not proof of production deployment. Never force-push or rewrite history.
- Every checkpoint reports repository, branch, commit, changed files, verification, remaining configuration, exact QA steps and deployment status.
