# Interaction Contrast Selection

Activate `INTERACTION_TRIGGER` only when correctness depends on several independently varying,
target-relevant factors and testing them one-at-a-time can miss interaction defects.

Examples of factor dimensions include path shape, normalization state, destination/collision state,
identity/generation, failure timing, retry state, or authority context. Bind only factors that are
admissible, reachable, and capable of changing `D`.

When exhaustive combinations are too expensive, construct a small interaction contrast set that
covers pairwise combinations first; raise to higher `t` only when the oracle/domain indicates a
higher-order interaction or a lower-order set leaves a material ambiguity.

```text
factors:
levels_per_factor:
interaction_order: 2 | 3 | ...
selected_cases:
covered_combinations:
uncovered_material_combinations:
stop_reason:
```

A covering-array style set is a test-selection device, not proof that untested higher-order
interactions are safe. Preserve explicit residual risk and do not manufacture factor independence.
Use the cheapest set that covers the interaction obligation already justified by the target.
