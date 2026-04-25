# PRD Authoring Copilot Skill

This repo contains the `prd-authoring-copilot` skill, project rule, and VSIX packaging so teams can install the same PRD behavior in Cursor.

## Edit here (source of truth)

- `.cursor/skills/prd-authoring-copilot/SKILL.md`
- `.cursor/rules/prd.mdc`
- `.cursor/skills/prd-authoring-copilot/templates/`
- `.cursor/skills/prd-authoring-copilot/example_prompts.md`
- `prds/PATTERNS.md` (living conventions; check `Recent additions`)

## Ship here (what goes in VSIX)

- `cursor-plugins/prd-authoring-copilot/`
- `src/extension.ts`
- `scripts/sync-plugin.mjs`
- `package.json`
- `.vscodeignore`

## Quick workflow

1. Update files in `.cursor/...` and `prds/PATTERNS.md`.
2. Run `npm run package` (this auto-syncs source content into `cursor-plugins/...`).
3. Install the VSIX to validate behavior.

## Build and install

```bash
npm install
npm run package
```

Artifact: `prd-authoring-copilot-skill-0.1.0.vsix`  
Install: **Extensions → ... → Install from VSIX...**

## Optional local-skill install (no VSIX)

Copy `.cursor/skills/prd-authoring-copilot` to `~/.cursor/skills/prd-authoring-copilot`.
