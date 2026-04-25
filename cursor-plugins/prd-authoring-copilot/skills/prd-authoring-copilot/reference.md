# PRD + Epic Writing Reference

## Quality Standards

Use these standards for high-quality outputs:

- **Specific**: requirements are clear and unambiguous.
- **Measurable**: success criteria can be validated.
- **Scoped**: in-scope and out-of-scope are explicit.
- **Traceable**: each requirement maps to a goal or metric.
- **Actionable**: engineering/design can act without guesswork.

## Requirement Language Patterns

Prefer:

- "The system must..."
- "Users can..."
- "The product should prevent..."

Avoid:

- "Ideally..."
- "Maybe..."
- "As needed..."

## Acceptance Criteria Patterns

Use Gherkin-style criteria where possible:

- Given <context>, when <action>, then <expected result>.

For non-functional criteria:

- "95th percentile response time is under 500ms for <operation>."
- "Critical flow completion rate remains above <threshold>."

## Epic Splitting Heuristics

Split epics when:

- delivery exceeds one planning increment
- user value can be released earlier in phases
- dependency chains block independent progress
- risk can be reduced via an MVP slice

## Risk Prompting

Always prompt for:

- legal/compliance implications
- operational readiness
- rollback and incident response needs
- reporting and observability gaps

## McDonald's Team Adaptation Notes

When relevant, account for:

- restaurant operational variability
- peak traffic and throughput constraints
- crew workflow simplicity
- franchise vs corporate process differences
- market-specific compliance and localization

## Formatting Guidance

- Keep sections short and scannable.
- Use bullets for scope and dependencies.
- Use numbered lists for acceptance criteria.
- Keep summaries concise and outcome-first.
