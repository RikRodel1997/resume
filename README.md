# resume

Resume repository to build a resume in React and export to PDF.

## Setup

1. Install dependencies:
   ```bash
   yarn
   ```

2. Copy the config template:
   ```bash
   cp resume-config.example.json resume-config.json
   ```

3. Copy translation files:
   ```bash
   cp public/locales/en/translation.json.example public/locales/en/translation.json
   cp public/locales/nl/translation.json.example public/locales/nl/translation.json
   ```

4. Edit `resume-config.json` with your personal details (gitignored)
5. Edit translation files if you want to customize UI labels (gitignored)

## Development

- Start dev server: `yarn dev`
- Lint and format: `yarn check` and `yarn check:fix` to force fixes
- Generate a PDF in the `output` directory: `yarn generate`

## Example

<embed src="example.pdf" type="application/pdf" width="100%" height="600px" />