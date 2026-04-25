# PRD Patterns and Lessons Learned

Use this living document to capture team-specific PRD conventions that are not obvious from the base template.

## Recent additions

> Keep this section short and current. List only new or changed conventions from the last 1-2 weeks so PMs can quickly see what changed.

- 2026-04-25: Write functional requirement acceptance criteria as observable user/system behaviors, not passive voice statements.
- 2026-04-25: For payments PRDs, add a dedicated "Reconciliation and refunds" subsection in section 7 (Functional requirements).
- 2026-04-25: For features touching authentication or authorization, include a threat-model link in section 8 (Non-functional requirements).
- 2026-04-25: Draft the executive summary first for stakeholder review speed, then revise it last before final approval.

## Accumulated patterns

### Functional requirements style

- Write requirements in active voice.
- Prefer user-observable outcomes in acceptance criteria.
- Avoid vague terms like "should be fast" without measurable targets.

### Domain-specific requirement reminders

- Payments:
  - Include reconciliation flow expectations.
  - Include refund lifecycle and edge cases.
- Security-sensitive features:
  - Link threat model and security review artifacts.
  - State authz assumptions explicitly.

### Stakeholder workflow preferences

- Keep executive summary draft-ready early in the process for leadership visibility.
- Revisit and tighten summary language after sections 7-10 are complete.

## How to update this file

- Use the most recent user prompts and feedback as the primary input for new entries.
- Add new items to `Recent additions` first.
- After 1-2 weeks, roll stable items into `Accumulated patterns`.
- Keep entries concrete, with direct wording PMs can apply in the next draft.
