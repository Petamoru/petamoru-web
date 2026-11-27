# petamoru-web

Petamoru’s static legal center is served by GitHub Pages at `petamoru.com`. It uses plain HTML and shared CSS. Inter and Nunito Sans are self-hosted under the SIL Open Font License.

| Page | English (default) | Spanish | Source files |
| --- | --- | --- | --- |
| Legal center | `/` | `/es/` | `index.html`, `es/index.html` |
| Privacy | `/privacy` | `/es/privacy` | `privacy.html`, `es/privacy.html` |
| Terms | `/terms` | `/es/terms` | `terms.html`, `es/terms.html` |
| Account deletion | `/delete-account` | `/es/delete-account` | `delete-account.html`, `es/delete-account.html` |

The English privacy and terms paths are fixed by CA-1.2.2 of the app spec. GitHub Pages serves the documents at extensionless URLs. Language selection links to the equivalent page. Keep both versions, their section IDs, dates, and language alternates in sync. The light and dark palettes follow the device preference.

## Preview

From the repository root, run `python -m http.server 8000`. Use the source filenames for direct local access because Python’s default server does not resolve extensionless URLs. To exercise navigation, use a static preview server that resolves an extensionless request to the corresponding `.html` file, as GitHub Pages does.

Check the eight paths, reciprocal language links and section links. At narrow widths, expand the “On this page” menu and test keyboard scrolling in each table. At desktop widths, check the sticky index. Test focus visibility and both system themes.

## Validation before publication

- Fill in the legal name, NIF and postal address of the controller and service provider in both languages.
- Confirm the account deletion flow in the app, its actual labels in both languages, and the ownership verification and response process for `privacy@petamoru.com`. Test with regular, Google and guest accounts as applicable.
- Verify what deletion removes from authentication, single-member and shared households, devices, and backups. Confirm the former-member display and the retention basis for shared records.
- Verify the policy for guest cleanup, notification tokens, invitations and failed attempts, join requests, security logs, crash reports, and backups. Confirm the previously documented thresholds (30 days, 60 days, 24 hours, 7 days and 90 days for guest cleanup, tokens, invitation codes and failed attempts, join requests, and crash reports, respectively) and replace provisional language with verified timings or criteria.
- Verify the Supabase region and email provider, the Firebase data and retention settings, each provider’s role and applicable international transfer safeguards. Complete both language versions once validated. See [GDPR Articles 13 and 44–49](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng).
- Confirm that `https://petamoru.com` has a valid certificate and that the GitHub Pages deployment serves all eight canonical paths.
