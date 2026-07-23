# IRSANAI Commands.md

This file defines the command layer for MetaFabric.
It sits above ordinary repo instructions and is meant to be read by future agents as a canonical operating reference.

---

## Language Standards | Sprachstandards

### DE Sandbox Commands
Use these when the user writes in German.

- **SAMC** → systemarchitektonisch und metakognitiv
- **MFC** → MetaFabric fortsetzen
- **SMC** → Source-Intent Mapping & Convergence
- **"setze SAMC fort"** → continue in the SAMC mode
- **"setze SMC fort"** → detect source intent, compare IST/SOLL, converge iteratively
- **"führe MFC aus"** → continue the MetaFabric build in SAMC mode

### EN Sandbox Commands
Use these when the user writes in English.

- **SAMC** → system-architectural and metacognitive
- **MFC** → continue MetaFabric
- **SMC** → Source-Intent Mapping & Convergence
- **"continue SAMC"** → continue in the SAMC mode
- **"continue MFC"** → continue the MetaFabric build in SAMC mode
- **"continue SMC"** → detect source intent, compare IS/SHOULD, converge iteratively

### Fast Recognition Rule
If a user message contains a command-like intent, first detect the language, then follow the matching sandbox standard.

- German request → answer and continue in German unless the task clearly needs bilingual output.
- English request → answer and continue in English unless the task clearly needs bilingual output.
- Mixed-language request → preserve the user's dominant language and keep the command labels bilingual.

---

## Hierarchy

1. **IRSANAI Commands.md** — highest project command layer
2. **README.md** — public-facing bilingual product and architecture overview
3. **Repository docs** — architecture, roadmap, implementation details
4. **Code and UI** — execution layer

---

## Canonical Modes

### SAMC
**systemarchitektonisch und metakognitiv** / **system-architectural and metacognitive**

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

### SMC
**Source-Intent Mapping & Convergence**

Use this mode when the task is not only to continue the build, but to:
- detect the source intent from a repository, URL, article, blog, vlog, or page
- infer the target intent (SOLL-Zustand)
- compare it against the current intent (IST-Zustand)
- converge iteratively toward the target without destroying the current structure
- preserve what already exists while minimizing unnecessary loss
- approximate the target as a tangent-like, incremental process

SMC is therefore the command for **intent alignment, contextual resonance, and iterative approximation**.

---

## Command Rule

When the user says something semantically equivalent to:

- "setze SAMC fort"
- "continue SAMC"
- "go on in SAMC mode"
- "MFC"
- "continue MetaFabric"
- "SMC"
- "detect the source intent"
- "align source / ist / soll"

…the assistant should continue the repo and architecture work in the correct mode.

---

## Live Proof / Example

If the user says:

> "okay... denke jetzt SAMC mäßig und führe MFC aus"

The assistant should interpret this as:
- enter SAMC thinking mode
- continue MetaFabric under MFC
- keep the architecture stable, reflective, and causal

If the user says:

> "setze SMC fort"

The assistant should:
- detect the source intent of the current artifact or URL
- compare source intent, current intent, and target intent
- move the system toward the target with minimal unnecessary loss
- preserve resonance with the existing repository state

---

## Behavioral Invariants

- Observation first
- Judgment last only if explicitly needed
- Confidence should be visible
- Feedback is a learning signal
- Self-hosted support remains a first-class path

---

## Notes for Future Agents

Treat MetaFabric as the product name.
Treat SAMC as the thinking mode.
Treat MFC as the continuation command.
Treat SMC as the intent-convergence command.

Do not expand the scope unless the new component clearly improves the architecture.
