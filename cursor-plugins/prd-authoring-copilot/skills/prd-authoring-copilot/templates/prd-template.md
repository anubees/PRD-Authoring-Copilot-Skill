# [Product / Feature Name] — Product Requirements Document

> Copy this file to `prds/<initiative-slug>/PRD.md` and fill in. Delete this blockquote when done.
> Replace bracketed `[…]` placeholders. Keep every section — if a section is light, write one line explaining why instead of removing it.

## 1. Document info

- **Author(s)**: [Name(s)]
- **Status**: Draft <!-- Draft | In review | Approved -->
- **Last updated**: [YYYY-MM-DD]
- **Version**: 0.1
- **Stakeholders**: [Product lead], [Engineering lead], [Design lead], [QA], [other reviewers]
- **Related artifacts**:
  - Research findings: [link]
  - Discovery doc: [link]
  - Design files: [link]
  - Analytics dashboards: [link]

## 2. Executive summary

[One paragraph, 5–8 sentences. What this is, who it's for, why now, and what success looks like. A reader should be able to skim only this section and understand the gist.]

## 3. Background and problem

### Context

[What's happening today. Current-state pain or opportunity.]

### Problem statement

[The specific problem being solved, and for whom. One or two sentences.]

### Evidence

[Quantitative and qualitative signal from research. Cite sources from the appendix.]

### Why now

[Why this is the right time to invest.]

## 4. Goals and non-goals

### Goals

1. [Specific, measurable outcome — not an output or feature.]
2. [Specific, measurable outcome.]
3. [Specific, measurable outcome.]

### Non-goals

- [What we are explicitly choosing NOT to do in this release.]
- [Another non-goal.]

## 5. Target users and personas

### Primary persona

[Who they are. What they need. Key behaviors and constraints.]

### Secondary personas

[If any, otherwise: "None — single primary persona for this release."]

### Out of scope users

[Groups we are not designing for in this release.]

## 6. User stories / use cases

Grouped by [persona | journey stage].

- As a [user], I want to [action], so that [benefit].
- As a [user], I want to [action], so that [benefit].
- As a [user], I want to [action], so that [benefit].

## 7. Functional requirements

Numbered, testable requirements. Tag priority with `[P0]` / `[P1]` / `[P2]`.

### 7.1 [Group name, if needed]

- **FR-1 [Name] [P0]**: [Short description.]
  *Acceptance criteria:*
  - [Observable condition that must be true.]
  - [Observable condition that must be true.]

- **FR-2 [Name] [P1]**: [Short description.]
  *Acceptance criteria:*
  - [Observable condition.]

## 8. Non-functional requirements

- **Performance**: [e.g., p95 latency under 200 ms on 4G; 1 000 concurrent users.]
- **Reliability / availability**: [SLA target, error budget.]
- **Security & privacy**: [Auth model, data handling, compliance — GDPR / HIPAA / SOC 2 / etc.]
- **Accessibility**: [WCAG level and specific requirements.]
- **Internationalization / localization**: [Languages, RTL support, currency/date formatting.]
- **Observability**: [Logs, metrics, analytics events to instrument.]

Mark `N/A` with a one-line reason for any category that doesn't apply.

## 9. UX / design

### Key flows

[Link to design files. Embed thumbnails for the critical path.]

### Interaction notes

[Edge-case states, empty states, error handling, anything that doesn't live naturally in design files.]

### Decision status

- **Locked**: [list]
- **Open**: [list — also surface in section 14]

## 10. Success metrics

### Primary metric

[The one number that defines success. Include baseline and target.]

### Secondary metrics

- [Supporting indicator.]
- [Supporting indicator.]

### Counter-metrics / guardrails

- [What we don't want to regress — e.g., page load time, support ticket volume.]

### Measurement plan

[How and where each metric is instrumented. Who owns the dashboard.]

## 11. Dependencies

- **Upstream** (we rely on): [team / system]
- **Downstream** (rely on us): [team / system]
- **External**: [vendors, APIs, contracts, legal review]

## 12. Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk description] | Low / Med / High | Low / Med / High | [How we'll prevent or contain it] |
| [Risk description] | Low / Med / High | Low / Med / High | [Mitigation] |

## 13. Timeline / milestones

High-level phases — not a Gantt chart. Note any hard external dates.

- Discovery — ✅ [date]
- Design review — [target date]
- Engineering kickoff — [target date]
- Alpha — [target date]
- Beta — [target date]
- GA — [target date]

External dates: [board demo, regulatory deadline, partner launch, etc. — or "None"]

## 14. Open questions

| # | Question | Owner | Target resolution |
| --- | --- | --- | --- |
| 1 | [Question] | [Name] | [Date] |
| 2 | [Question] | [Name] | [Date] |

## 15. Appendix

### Research

- [Link to interview notes]
- [Link to survey results]
- [Link to analytics analysis]

### Prior decisions / ADRs

- [Link]

### Glossary

- **[Term]**: [Definition.]
