# Examples

## Example 1: Rough Idea to PRD

### Input

"We need to reduce checkout abandonment in the app. We think payment friction is too high."

### Output (abridged)

```markdown
# Checkout Friction Reduction

## 1) Context and Problem
- Abandonment is highest during payment step.
- Users drop when re-entering payment details.

## 2) Goals and Non-Goals
### Goals
- Reduce checkout abandonment by 15% in 2 quarters.
- Increase successful mobile checkout completion rate.

### Non-goals
- Replatforming payment gateway.

## 4) Requirements
### Functional requirements
1. Support one-tap saved payment methods for eligible users.
2. Auto-validate card details inline before submit.

## 6) Analytics and Success Metrics
- Checkout completion rate
- Payment-step error rate
- Time-to-complete checkout
```

## Example 2: PRD to Jira Epic

### Input

"Convert this requirement into a Jira epic:
'Support saved payment methods and reduce payment-step failure.'"

### Output

```markdown
Epic Name: Saved Payments and Checkout Reliability
Epic Summary: Improve mobile checkout conversion by reducing payment friction and failures.

Description:
## Objective
Enable faster and more reliable payment completion in mobile checkout.

## Problem Statement
Users abandon checkout due to payment retries and manual re-entry.

## Scope
### In scope
- Saved payment token usage
- Inline validation for payment fields
- Payment error messaging improvements

### Out of scope
- New payment provider integration

## Acceptance Criteria
1. Given a returning user with a stored payment method, when they checkout, then they can complete payment without re-entering card details.
2. Given invalid card input, when the user leaves a field, then validation feedback appears before submit.

## Success Metrics
- +8% checkout completion rate on mobile
- -20% payment-step error rate
```

## Example 3: Review Mode

### Input

"Review this PRD for gaps."

### Output style

- Missing non-goals section; scope may expand unchecked.
- Success metrics lack timeframe and target baseline.
- Acceptance criteria should include failure/timeout behavior.
- Dependency on analytics events is not documented.
