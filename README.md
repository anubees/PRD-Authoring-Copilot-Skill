# PRD Authoring Copilot Skill

This repository contains a project-local Cursor skill named `prd-authoring-copilot`.

## Location

Skill files are stored at:

`.cursor/skills/prd-authoring-copilot/`

## Included Files

- `.cursor/skills/prd-authoring-copilot/SKILL.md`: Main skill instructions
- `.cursor/skills/prd-authoring-copilot/reference.md`: Detailed quality and writing guidance
- `.cursor/skills/prd-authoring-copilot/_examples/examples.md`: Input/output examples for PRDs and Jira epics
- `.cursor/skills/prd-authoring-copilot/templates/prd-template.md`: Reusable PRD template
- `.cursor/skills/prd-authoring-copilot/templates/jira-epic-template.md`: Reusable Jira epic template
- `.cursor/rules/prd.mdc`: Project rule for PRD authoring behavior

## Local Development

Use this repository to evolve the skill content, test prompting quality, and prepare packaging for a Cursor extension installer.

## Workflow Notes

- Primary authoring source of truth: the skill templates in `.cursor/skills/prd-authoring-copilot/templates/`
- Markdown workflow: create PRDs at `prds/<initiative-slug>/PRD.md` when requested
- Word workflow: when the user requests `.docx`, follow the `docx` skill path

## Install Into Personal Skills (Optional)

When ready to install manually, copy the folder:

`.cursor/skills/prd-authoring-copilot`

to:

`~/.cursor/skills/prd-authoring-copilot`
