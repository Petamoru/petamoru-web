# petamoru-web

Petamoru’s static legal center is served by GitHub Pages at `petamoru.com`. It uses plain HTML and shared CSS. Inter and Nunito Sans are self-hosted under the SIL Open Font License. The logo, favicon and touch icon in `img/` are cut from the app's launcher icon.

| Page | English (default) | Spanish | Source files |
| --- | --- | --- | --- |
| Legal center | `/` | `/es/` | `index.html`, `es/index.html` |
| Privacy | `/privacy` | `/es/privacy` | `privacy.html`, `es/privacy.html` |
| Terms | `/terms` | `/es/terms` | `terms.html`, `es/terms.html` |
| Account deletion | `/delete-account` | `/es/delete-account` | `delete-account.html`, `es/delete-account.html` |

The privacy and terms paths are the URLs the app links to (CA-1.2.2 of the app spec), so they must not change. GitHub Pages serves the documents at extensionless URLs. Language selection links to the equivalent page. Keep both versions, their section IDs, dates, and language alternates in sync. The light and dark palettes follow the device preference.

## Preview

From the repository root, run `python -m http.server 8000`. Use the source filenames for direct local access because Python’s default server does not resolve extensionless URLs. To exercise navigation, use a static preview server that resolves an extensionless request to the corresponding `.html` file, as GitHub Pages does.

Check the eight paths, reciprocal language links and section links. At narrow widths, expand the “On this page” menu and test keyboard scrolling in each table. At desktop widths, check the sticky index. Test focus visibility and both system themes.

## Validation before publication

- Fill in the legal name, NIF and postal address of the controller in both languages.
- Confirm that `privacy@petamoru.com` receives mail and how ownership of an account is verified for deletion requests sent by email.
- Retention periods match the backend's scheduled jobs (`backend/supabase/migrations` in the app repo: guests 30 days, notification tokens 60 days, invitation codes and failed attempts 24 hours, join requests 7 days). Update both languages whenever those jobs change.
- Check in the Firebase console that Crashlytics keeps reports for 90 days.
