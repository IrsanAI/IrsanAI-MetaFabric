# IrsanAI MetaFabric

**DE | EN**

---

## Deutsch

**IrsanAI MetaFabric** ist ein metakognitives AI-Fabric-System zur Orchestrierung von Fähigkeiten, nicht nur von Modellen.

MetaFabric ist der reine Kern des IrsanAI-Systems: ein reflektionsorientiertes Portal für das Verbinden von KI-Providern, self-hosted Runtimes, persönlichen Capability-Silos und einem transparenten Feedback-Layer.

> **Architektur-Invariante:** Dieses System ist ein **Beobachtungs- und Reflexionswerkzeug**, niemals ein Urteilswerkzeug.
> Es beschreibt Zustand, Drift, Confidence und Trends — es fällt aber keine endgültigen Urteile über Menschen.

### Kernprinzipien

- **Capabilities first** — Provider sind austauschbare Ausführungsinstanzen.
- **Beobachtung vor Urteil** — das System misst Zustand, nicht Identität.
- **Metakognitiv by design** — jede starke Schlussfolgerung trägt Unsicherheit und Nachvollziehbarkeit.
- **Self-hosted friendly** — Cloud, lokal und private Endpunkte teilen sich eine gemeinsame Control Plane.
- **Feedback-native** — Nutzer können direkt reagieren, bewerten und verbessern.

### v1 Scope

Dieses Repository startet mit einer bewusst kleinen, öffentlichen und sauberen Grundlage:

- Landingpage und Produktframing
- Capability-/Provider-/Policy-Architekturhinweise
- Feedback-Area-Konzept
- Roadmap für Auth, Connectoren und Self-hosted Support

### Projektvokabular

| Begriff | Bedeutung |
|---|---|
| **MetaFabric** | Produkt und Control Plane |
| **SAMC** | systemarchitektonisch und metakognitiv |
| **MFC** | MetaFabric Continuation |
| **SMC** | Source-Intent Mapping & Convergence |

### Command Standards | Sprachstandards

| Sprache | Sandbox Commands | Bedeutung |
|---|---|---|
| **DE** | `SAMC`, `MFC`, `SMC`, `IDC`, `IGC`, `RLC` | `SAMC` = systemarchitektonisch und metakognitiv; `MFC` = MetaFabric fortsetzen; `SMC` = Source-Intent Mapping & Convergence; `IDC` = Intent Drift Check; `IGC` = Intent Governance Check; `RLC` = Resonance Layer Check |
| **EN** | `SAMC`, `MFC`, `SMC`, `IDC`, `IGC`, `RLC` | `SAMC` = system-architectural and metacognitive; `MFC` = continue MetaFabric; `SMC` = Source-Intent Mapping & Convergence; `IDC` = Intent Drift Check; `IGC` = Intent Governance Check; `RLC` = Resonance Layer Check |

| Trigger phrase | Interpreted as |
|---|---|
| `SAMC fortsetzen` | Continue in SAMC mode |
| `continue SAMC` | Continue in SAMC mode |
| `führe MFC aus` | Continue the MetaFabric build in SAMC mode |
| `continue MFC` | Continue the MetaFabric build in SAMC mode |
| `setze SMC fort` | Detect source intent, compare IST/SOLL, converge iteratively |
| `continue SMC` | Detect source intent, compare IS/SHOULD, converge iteratively |

**Output expectation:** Jeder Command liefert einen klar benennbaren Output mit `summary`, `state`, `delta`, `risks`, `next_step` und `confidence`. Die konkreten Felder sind in [`IRSANAI Commands.md`](./IRSANAI%20Commands.md) festgelegt.

Wenn später etwas in diesem Stil gewünscht wird, kann darauf direkt mit **„SAMC fortsetzen“**, **„MFC“** oder **„SMC“** Bezug genommen werden.

### Command Layer

Die kanonische Command-Referenz liegt hier:

- [`IRSANAI Commands.md`](./IRSANAI%20Commands.md)

### Geplante Struktur

```text
IrsanAI-MetaFabric/
├── index.html
├── styles.css
├── app.js
├── IRSANAI Commands.md
└── README.md
```

### Nächste Schritte

1. Den Kern schlank halten.
2. Die Landingpage bauen.
3. Feedback-Capture ergänzen.
4. Identity- und Connector-Layer hinzufügen.
5. Provider-Routing und Self-hosted Support erweitern.

---

## English

**IrsanAI MetaFabric** is a metacognitive AI fabric for orchestrating capabilities, not just models.

MetaFabric is the clean core of the IrsanAI system: a reflection-first portal for connecting AI providers, self-hosted runtimes, personal capability silos, and a transparent feedback layer.

> **Architecture invariant:** This system is a **watching and reflecting tool**, never a judging tool.
> It describes state, drift, confidence, and trends — but it does not assign final verdicts about people.

### Core Principles

- **Capabilities first** — providers are interchangeable executors.
- **Observation over judgment** — the system measures state, not identity.
- **Metacognitive by design** — every strong conclusion should carry uncertainty and traceability.
- **Self-hosted friendly** — cloud, local, and private endpoints should share one control plane.
- **Feedback-native** — users can react, rate, and improve the system in place.

### v1 Scope

This repository starts with a deliberately small, public-safe foundation:

- Landing page and product framing
- Capability / provider / policy architecture notes
- Feedback area concept
- Roadmap for auth, connectors, and self-hosted support

### Project Vocabulary

| Term | Meaning |
|---|---|
| **MetaFabric** | Product and control plane |
| **SAMC** | system-architectural and metacognitive |
| **MFC** | MetaFabric Continuation |
| **SMC** | Source-Intent Mapping & Convergence |

### Command Standards | Language Standards

| Language | Sandbox Commands | Meaning |
|---|---|---|
| **DE** | `SAMC`, `MFC`, `SMC`, `IDC`, `IGC`, `RLC` | `SAMC` = systemarchitektonisch und metakognitiv; `MFC` = MetaFabric fortsetzen; `SMC` = Source-Intent Mapping & Convergence; `IDC` = Intent Drift Check; `IGC` = Intent Governance Check; `RLC` = Resonance Layer Check |
| **EN** | `SAMC`, `MFC`, `SMC`, `IDC`, `IGC`, `RLC` | `SAMC` = system-architectural and metacognitive; `MFC` = continue MetaFabric; `SMC` = Source-Intent Mapping & Convergence; `IDC` = Intent Drift Check; `IGC` = Intent Governance Check; `RLC` = Resonance Layer Check |

| Trigger phrase | Interpreted as |
|---|---|
| `continue SAMC` | Continue in SAMC mode |
| `continue MFC` | Continue the MetaFabric build in SAMC mode |
| `continue SMC` | Detect source intent, compare IS/SHOULD, converge iteratively |

**Output expectation:** Every command should produce a clearly readable output with `summary`, `state`, `delta`, `risks`, `next_step`, and `confidence`. The exact fields are defined in [`IRSANAI Commands.md`](./IRSANAI%20Commands.md).

When something in this style is requested later, we can refer to it directly as **“continue SAMC”**, **“MFC”**, or **“SMC”**.

### Command Layer

The canonical command reference lives here:

- [`IRSANAI Commands.md`](./IRSANAI%20Commands.md)

### Planned Structure

```text
IrsanAI-MetaFabric/
├── index.html
├── styles.css
├── app.js
├── IRSANAI Commands.md
└── README.md
```

### Next Steps

1. Keep the core clean and small.
2. Build the landing page first.
3. Add feedback capture.
4. Add identity and connector layers.
5. Expand into provider routing and self-hosted support.

### License

To be added when the repository policy is finalized.
