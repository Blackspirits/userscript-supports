# Constructive Witness and Orthogonal Residual Search

This reference refines audit search. It does not change authority, Pick roles, or verdict semantics.

## 1. BOUNDARY_WITNESS

For a nontrivial material conclusion, ask whether a cheap admissible **near-miss pair** can falsify it.
If yes, construct the smallest pair that differs in exactly one target-relevant semantic dimension and
trace both through the decisive path to `D`.

```text
claim:
x_accept / x_near_miss:
single_changed_dimension:
admissibility/reachability:
decisive_path:
observed_or_oracle_decisions:
disposition: CONFIRMS | FALSIFIES | UNRESOLVED
```

Prefer a deterministic proof when it is already stronger and the concrete pair adds no decision
information. A convenient example is not a witness unless both states are admissible (or legitimately
test `P`) and the oracle/authority establishes the required decision relation.

Use the witness to test the actual semantic boundary, not to decorate an already-settled conclusion.

## 2. ORTHOGONAL_RESIDUAL

For `DELTA_AUDIT` and `FULL_AUDIT`, resolving the primary invariant does not by itself close the audit.
Before a completeness-bearing verdict, run **one bounded residual-selection pass** over material
families not explained by the primary mechanism and not already `CHECKED | EXCLUDED`.

The residual family must be semantically different from the primary mechanism. Generate candidates
from the actual artifact/domain rather than a fixed checklist. Examples such as normalization,
identity/freshness, failure/compensation, ordering, resource lifecycle, collision behavior, or
information loss are prompts only when reachable and target-relevant.

If the pass produces a new material witness, investigate it under the existing coverage contract. If
it produces none, continue only for another already-bound coverage obligation or unresolved family;
otherwise stop.

## 3. Marginal uncovered semantic coverage

When multiple probes are available, rank them qualitatively by:

```text
probe_value ~= newly covered decision-relevant mechanisms / operational cost-or-risk
```

Prefer the reachable probe that covers the most still-unresolved acceptance-changing mechanisms for
the least cost. Avoid re-probing semantics already established merely to gain confidence.

This has a diminishing-returns/submodular motivation when probe coverage overlaps, but real defect
discovery is not assumed to be monotone or submodular. Do not claim a formal approximation guarantee,
and do not invent coverage probabilities, priors, or utilities.

## 4. Stop rule

Stop this search-policy refinement when:

- the near-miss pair is decided or blocked by a named oracle/observable;
- the one bounded orthogonal residual pass yields no new material witness; or
- remaining work belongs to an already-bound coverage obligation rather than residual exploration.

The mechanism is internal control logic, not mandatory user-facing ceremony.
