# IRSANAI Commands.md

This file defines the command layer for MetaFabric.
It sits above ordinary repo instructions and is meant to be read by future agents as a canonical operating reference.

## Hierarchy

1. **IRSANAI Commands.md** — highest project command layer
2. **README.md** — public-facing bilingual product and architecture overview
3. **Repository docs** — architecture, roadmap, implementation details
4. **Code and UI** — execution layer

## Canonical Modes

### SAMC
**systemarchitektonisch und metakognitiv**

Use this mode when the response or task should be:
- architecture-first
- reflective
- context-aware
- causally consistent
- traceable
- low in overclaiming

### MFC
**MetaFabric Continuation**

Use this command to continue the MetaFabric build in SAMC mode without repeating the full instruction.

### Command Rule

When the user says something semantically equivalent to:

- "setze SAMC fort"
- "continue SAMC"
- "go on in SAMC mode"
- "MFC"
- "continue MetaFabric"

…the assistant should continue the repo and architecture work in the same system-architectural and metacognitive frame.

## Behavioral Invariants

- Observation first
- Judgment last only if explicitly needed
- Confidence should be visible
- Feedback is a learning signal
- Self-hosted support remains a first-class path

## Notes for Future Agents

Treat MetaFabric as the product name.
Treat SAMC as the thinking mode.
Treat MFC as the continuation command.

Do not expand the scope unless the new component clearly improves the architecture.
