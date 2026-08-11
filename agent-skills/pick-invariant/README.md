# PickInvariant

PickInvariant is a runtime reasoning skill for unresolved decisions, bounded exploration, invariant
audits, and owner-identified gaps. The default kernel stays compact and loads specialist references
only when their material trigger fires.

## Runtime contents

- `SKILL.md` — always-loaded activation, authority, depth, and specialist-firewall kernel.
- `references/` — specialist doctrine loaded only when material.
- `integration/` — procedure-resolution and specialized-gate integration rules.
- `templates/` — optional receipts/certificates for structured internal or requested output.
- `examples/` — calibration examples loaded only when useful.
- `agents/` — agent metadata and default prompt.

Evaluation scripts, simulations, CSV/JSON fixtures, archived baselines, migrations, acceptance-test
corpora, and release-engineering manifests are intentionally excluded from the shipped runtime skill.
They belong in the development/CI repository rather than the user-facing skill artifact.

## Loading rule

Progressive loading is part of the algorithm. When a mandatory specialist trigger fires, load the
corresponding reference before making claims that depend on that doctrine. If the required reference
is unavailable, narrow or downgrade the conclusion rather than inventing semantics.
