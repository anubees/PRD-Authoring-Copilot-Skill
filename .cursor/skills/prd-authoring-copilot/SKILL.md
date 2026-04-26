---
name: prd-authoring-copilot
description: Produces structured PRDs and Jira-ready epics from approved research findings and product artifacts used by the team of Product Managers. Use when the user asks to write or refine a PRD, draft requirements, convert discovery outputs into planning documents, or create Jira epics for delivery. If the user asks for a Word document, generate a `.docx` file using the `docx` skill.
---

# PRD (Product Requirements Document) Authoring Skill

## Purpose

Turn approved product research and discovery artifacts — market and segment research, data analyses, competitive scans, prototypes, design mocks, stakeholder input — into a comprehensive, engineering-ready Product Requirements Document.

A PRD is a **handoff artifact**. It will be read by engineering, design, QA, segment, marketing, and leadership. It needs to be concrete enough that an engineer can scope and build without playing detective, and tight enough that an exec can skim the top and understand what's being built and why.

## Interaction contract (must do before drafting)

Before drafting, always do the following in order:

1. Ask whether the team uses a shared artifacts location for research and discovery.
2. Gather available artifacts from the shared path (if provided) plus workspace/user-provided files.
3. Ask up to four targeted clarifying questions if essential information is missing.
4. Confirm output format (default `.docx`, unless user asks for another format).

Do not draft the PRD until these steps are complete.

## Decision logic

- If the user provides a shared artifacts path/link, treat it as the primary source of truth.
- If no shared path is used, continue with artifacts already attached or provided in the workspace/chat.
- If core essentials are missing, ask focused clarification questions before drafting.
- If essentials are sufficiently defined, proceed to drafting without unnecessary extra turns.

## Continuous learning update (after drafting or review)

After completing a PRD draft or PRD review task, scan the most recent user prompts and feedback for reusable team conventions. If you find a new lesson that is likely to matter in future PRDs, update `prds/PATTERNS.md`:

1. Add a concise dated bullet under `Recent additions`.
2. Keep wording actionable and specific (something a PM can apply immediately).
3. Avoid duplicates; merge with an existing pattern when equivalent.
4. If an item is stable after 1-2 weeks, move it to `Accumulated patterns`.

## Step 1 — Gather inputs and close gaps *before* drafting

A good PRD reflects real discovery work, not guesses. Before writing anything:

1. **Ask about a shared artifacts location first.** Start by asking whether the team keeps research findings and supporting artifacts in a shared location. This is optional, but the check is required. If they do, ask for the exact path or link and use it as the primary source of truth for inputs.

2. **Identify what the user has already provided.** Look for attached research summaries, interview notes, analytics exports, design files, competitive scans, earlier drafts, strategy docs, plus any shared path the user provided. Read them in full — don't skim. Cite what you find when you draft.

3. **Check for gaps in the essentials.** A comprehensive PRD cannot be written without clear answers to each of the following. If any are missing or ambiguous from the material provided, ask the user 2–4 targeted questions *before* drafting. Don't assume — asking upfront is cheaper than rewriting.

   - **Problem**: What specific user or business problem is being solved? What's the evidence that it's real and worth solving now?
   - **Target users**: Who is the primary persona? Are there secondary users? Who is explicitly out of scope?
   - **Outcome / success metrics**: What measurable change defines success? (e.g., conversion lift of X%, a Y-minute reduction in time-to-complete, CSAT ≥ Z)
   - **Scope boundaries**: Any hard non-goals, platform constraints (web only? mobile?), regulatory constraints, or timeline targets?
   - **Stakeholders and approvers**: Who signs off? Who needs to be consulted? Who is informed?

   Keep the first round of questions to at most four. If something critical is still fuzzy after the first reply, ask one focused follow-up rather than piling on another long list.

4. **Confirm output format.** The default output is a Word document (`.docx`) — most teams expect PRDs in Word. Only switch formats if the user asks for Markdown, Google Doc, Notion-ready markdown, or something else.

## Step 2 — Produce the PRD

Use the template below. Keep every section even if a section is light — include a brief one-line note explaining why (e.g., "No non-functional constraints beyond platform defaults") rather than silently omitting sections. That absence of content is itself useful signal to the reader.

Use H1 for the document title, H2 for numbered sections, H3 for subsections.

```
# [Product / Feature Name] — Product Requirements Document

## 1. Document info
- Author(s): [name(s)]
- Status: Draft | In review | Approved
- Last updated: [date]
- Version: [e.g., 0.1]
- Stakeholders: Product lead, Engineering lead, Design lead, QA, other reviewers
- Related artifacts: links to research findings, discovery docs, design files, analytics dashboards

## 2. Executive summary
One paragraph, 5–8 sentences. What this is, who it's for, why now, and what success looks like. A reader should be able to skim only this section and understand the gist.

## 3. Background and problem
- Context: what's happening today; current-state pain or opportunity
- Problem statement: the specific problem being solved, and for whom
- Evidence: quantitative and qualitative signal from research — cite sources
- Why now: why this is the right time to invest

## 4. Goals and non-goals
- Goals: 3–5 bullets. Each a specific, measurable outcome (not an output or feature).
- Non-goals: what we are explicitly choosing NOT to do in this release. Non-goals prevent scope creep and are often the most valuable section for engineering.

## 5. Target users and personas
- Primary persona: who they are, what they need, key behaviors and constraints
- Secondary personas (if any)
- Out of scope users: groups we are not designing for in this release

## 6. User stories / use cases
Use "As a [user], I want to [action], so that [benefit]." Group by persona or journey stage. Cover the critical path first, then edge cases.

## 7. Functional requirements
Numbered, testable requirements. Each must be unambiguous enough that an engineer can implement it and a QA can verify it.

Format each as:
- **FR-1 [Name]**: [Short description.] *Acceptance criteria:* bulleted, observable conditions that must be true.

If the feature is large, group related requirements under H3 subheadings (e.g., "### 7.1 Onboarding flow").

Where priority matters, tag requirements with [P0] / [P1] / [P2].

## 8. Non-functional requirements
- Performance: latency, throughput, load targets
- Reliability / availability: SLA, error budgets
- Security & privacy: auth, data handling, compliance (GDPR, HIPAA, SOC 2, etc.)
- Accessibility: WCAG level and specific requirements
- Internationalization / localization
- Observability: logging, metrics, analytics to instrument

Mark "N/A" with a one-line reason for any category that doesn't apply.

## 9. UX / design
- Key flows (link to design files or embed thumbnails)
- Interaction notes that don't live naturally in design files (empty states, error states, edge-case handling)
- Which design decisions are locked vs. still open

## 10. Success metrics
- Primary metric: the one number that defines success
- Secondary metrics: supporting indicators
- Counter-metrics / guardrails: what we don't want to regress (e.g., page load time, support ticket volume)
- Measurement plan: how and where each metric is instrumented, and who owns the dashboard

## 11. Dependencies
- Upstream: teams or systems we rely on
- Downstream: teams or systems that rely on us
- External: vendors, APIs, contracts, legal review

## 12. Risks and mitigations
Use a table:
| Risk | Likelihood | Impact | Mitigation |

## 13. Timeline / milestones
High-level phases (not a Gantt chart). E.g., Discovery ✅ → Design review → Eng kickoff → Alpha → Beta → GA. Note any hard external dates (board demo, regulatory deadline, partner launch).

## 14. Open questions
Numbered list of things still to resolve, each with an owner and a target resolution date. A PRD without open questions is usually hiding something — surfacing unknowns is a feature, not a weakness.

## 15. Appendix
- Links to raw research
- Prior decisions / ADRs
- Glossary of domain terms if jargon-heavy
```

## Writing guidance

- **Voice**: Neutral, declarative, present tense. Not marketing copy. Not defensive.
- **Specificity over hedging**: "The checkout button responds in under 200 ms on 4G" beats "checkout should be fast."
- **Cite the research**: Every claim about user behavior, market, or data should be traceable to a source in the appendix. If you're stating something without evidence, move it into Open Questions or flag it as an assumption.
- **Testable requirements**: If QA can't tell from the wording alone whether a requirement was met, rewrite it.
- **Describe *what* and *why*, not *how***. The PRD is not an implementation spec — engineering owns the how. Exceptions are constraints that are actually requirements (e.g., "must run on-device" is a real requirement; "use library X" usually isn't).
- **Length**: A typical comprehensive PRD is 4–10 pages. If you're headed past 12 pages, ask whether you're actually writing a design doc or an RFC.

## Step 3 — Produce the `.docx` (default)

When the final output is a Word document:

1. **Read the `docx` skill's SKILL.md first** — it's the authoritative source for how to create well-formatted Word documents (styles, headings, tables, TOC, page numbers). Follow its patterns rather than improvising.
2. Use Word's built-in heading styles (Heading 1 / Heading 2 / Heading 3) so the document gets a usable navigation pane and a working table of contents.
3. Insert a table of contents at the top, auto-generated from headings.
4. Use real Word tables for the Risks, Requirements, and Timeline sections — not indented bullets pretending to be tables.
5. If the user provided diagrams, screenshots, or mocks, embed them in the UX section rather than leaving bare links.
6. Save the `.docx` to the outputs folder and share the link with the user.

If the user asks for a non-Word format (Markdown, Google Doc, Notion), produce the PRD in that format instead — the structure and writing guidance above still apply.

## Common pitfalls

- **Writing an implementation spec instead of a requirements doc.** Describe what and why. Engineering owns the how.
- **Soft success metrics** like "improve user experience." Replace with a measurable outcome and a measurement plan.
- **Unsupported claims.** If the research doesn't back it, don't assert it. Flag it as an assumption or move it to Open Questions.
- **Missing non-goals.** Without them, scope balloons silently. Even a short list is better than none.
- **Treating the PRD as done when it's drafted.** It's a living document until GA — leave it in "Draft" status with open questions visible until the team has actually reviewed and resolved them.