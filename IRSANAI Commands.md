# IRSANAI Commands.md

This file defines the command layer for MetaFabric.
It sits above ordinary repo instructions and is meant to be read by future agents as a canonical operating reference.

---

## Language Standards | Sprachstandards

| Language | Sandbox Commands | Meaning |
|---|---|---|
| **DE** | `SAMC`, `MFC`, `SMC`, `IDC`, `IGC`, `RLC` | `SAMC` = systemarchitektonisch und metakognitiv; `MFC` = MetaFabric fortsetzen; `SMC` = Source-Intent Mapping & Convergence; `IDC` = Intent Drift Check; `IGC` = Intent Governance Check; `RLC` = Resonance Layer Check |
| **EN** | `SAMC`, `MFC`, `SMC`, `IDC`, `IGC`, `RLC` | `SAMC` = system-architectural and metacognitive; `MFC` = continue MetaFabric; `SMC` = Source-Intent Mapping & Convergence; `IDC` = Intent Drift Check; `IGC` = Intent Governance Check; `RLC` = Resonance Layer Check |

### Quick Lookup | Schnellzugriff

| Trigger phrase | Interpreted as |
|---|---|
| `setze SAMC fort` | Continue in SAMC mode |
| `continue SAMC` | Continue in SAMC mode |
| `führe MFC aus` | Continue the MetaFabric build in SAMC mode |
| `continue MFC` | Continue the MetaFabric build in SAMC mode |
| `setze SMC fort` | Detect source intent, compare IST/SOLL, converge iteratively |
| `continue SMC` | Detect source intent, compare IS/SHOULD, converge iteratively |
| `setze IDC fort` | Check whether the current evolution still follows original intent |
| `setze IGC fort` | Decide whether drift is acceptable or requires escalation |
| `setze RLC fort` | Check whether the solution still resonates with the system and user goal |

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

| Mode | Full meaning | Use it for |
|---|---|---|
| **SAMC** | systemarchitektonisch und metakognitiv / system-architectural and metacognitive | Architecture-first, reflective, context-aware, causally consistent, traceable work |
| **MFC** | MetaFabric Continuation | Continue the MetaFabric build in SAMC mode without repeating the full instruction |
| **SMC** | Source-Intent Mapping & Convergence | Detect source intent, infer target intent, compare current intent, and converge iteratively |
| **IDC** | Intent Drift Check | Compare current evolution against original intent and classify drift |
| **IGC** | Intent Governance Check | Decide whether detected drift is acceptable, requires review, or must be reverted |
| **RLC** | Resonance Layer Check | Verify that the result still resonates with the system, user, and original purpose |

---

## Command Execution Contract

Every command must expose a user-narratable output.

| Element | Description |
|---|---|
| Intent | Why does the command exist? |
| Trigger | When should it be used? |
| Processing | What happens internally? |
| Output | What will the user visibly receive? |
| Guardrails | What must never happen? |

### Expected Output Fields

When a command produces structured output, the result should make the following fields easy to read:

| Field | Meaning |
|---|---|
| `summary` | One-line result of the command |
| `state` | Current system or repo state |
| `delta` | What changed or what was detected |
| `risks` | Any cautions or drift signals |
| `next_step` | Best next action |
| `confidence` | How strong the conclusion is |

---

## Command-Specific Output Shapes

### SAMC

| Field | Meaning |
|---|---|
| `summary` | What the architecture is doing now |
| `state` | Current layers, dependencies, and invariants |
| `delta` | Structural issue or improvement opportunity |
| `risks` | Drift, ambiguity, hidden coupling |
| `next_step` | Architectural recommendation |
| `confidence` | Confidence in the analysis |

### MFC

| Field | Meaning |
|---|---|
| `summary` | What continuation step was taken |
| `state` | Current repo checkpoint |
| `delta` | What was added or preserved |
| `risks` | Scope creep, drift, inconsistency |
| `next_step` | Best next iteration |
| `confidence` | Confidence in the continuation |

### SMC

| Field | Meaning |
|---|---|
| `summary` | Source/target alignment result |
| `source_intent` | Original intent detected from source |
| `current_intent` | Current intent of the repo or artifact |
| `target_intent` | Desired end state |
| `delta` | Gap between source/current/target |
| `convergence_action` | Smallest safe step toward the target |
| `confidence` | Confidence in the mapping |

### IDC

| Field | Meaning |
|---|---|
| `summary` | Whether drift is present |
| `original_intent` | Baseline intent |
| `current_direction` | Observed direction of change |
| `drift_detected` | Yes/No |
| `drift_type` | Semantic / implementation / intent |
| `recommendation` | How to handle the drift |
| `confidence` | Confidence in the drift assessment |

### IGC

| Field | Meaning |
|---|---|
| `summary` | Whether the drift is acceptable |
| `drift_state` | Allowed / review / revert |
| `allowed` | Yes/No |
| `reason` | Why the decision was made |
| `action` | What to do next |
| `confidence` | Confidence in the governance call |

### RLC

| Field | Meaning |
|---|---|
| `summary` | Whether the result still resonates |
| `resonance_state` | Aligned / partial / off-track |
| `mismatch_signals` | What does not fit |
| `alignment_action` | How to restore resonance |
| `confidence` | Confidence in the resonance check |

---

## SMC Detail

Use this mode when the task is not only to continue the build, but to:
- detect the source intent from a repository, URL, article, blog, vlog, or page
- infer the target intent (SOLL-Zustand)
- compare it against the current intent (IST-Zustand)
- converge iteratively toward the target without destroying the current structure
- preserve what already exists while minimizing unnecessary loss
- approximate the target as a tangent-like, incremental process

SMC is therefore the command for **intent alignment, contextual resonance, and iterative approximation**.

---

## Live Proof / Example

| User phrase | Assistant interpretation | Visible output shape |
|---|---|---|
| `okay... denke jetzt SAMC mäßig und führe MFC aus` | enter SAMC thinking mode, continue MetaFabric under MFC, keep the architecture stable, reflective, and causal | `summary`, `state`, `delta`, `next_step` |
| `setze SMC fort` | detect source intent of the current artifact or URL, compare source intent, current intent, and target intent, then move the system toward the target with minimal unnecessary loss | `source_intent`, `current_intent`, `target_intent`, `delta`, `convergence_action` |
| `setze IDC fort` | check current evolution against original intent | `original_intent`, `current_direction`, `drift_detected`, `drift_type`, `recommendation` |
| `setze IGC fort` | decide whether the detected drift is acceptable | `drift_state`, `allowed`, `reason`, `action` |
| `setze RLC fort` | verify resonance with system and user goal | `resonance_state`, `mismatch_signals`, `alignment_action` |

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
Treat IDC, IGC, and RLC as integrity commands.

Do not expand the scope unless the new component clearly improves the architecture.
