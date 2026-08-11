# Canonicalization Congruence

Activate `CANONICALIZATION_SEAM` when the same semantic object crosses two or more stages whose
normalization/equivalence rules can affect the target, for example:

```text
raw -> parse -> normalize -> validate -> store/index -> lookup/compare
```

Do not trigger merely because strings or transforms exist. Trigger when stage-induced equivalence
classes can disagree in a decision-relevant way.

For a stage intended to produce a canonical form, test idempotence when applicable:

```text
N(N(x)) = N(x)
```

More importantly, compare equivalence across stages. If an authoritative canonicalizer collapses two
admissible inputs, downstream decisions intended to operate on that canonical object should normally
remain congruent unless a later authority explicitly reintroduces the distinction:

```text
N(x1) = N(x2)  =>  D(x1) = D(x2)
```

Construct the cheapest admissible pair for which one stage treats `x1,x2` as equal and another
distinguishes them. Test transform order only when multiple canonicalizers compose and order can
change `D`.

Classify the missing distinction as `B` for a transformation/producer-consumer seam, `P` when it
changes applicability, and `χ` only when several transformations create a genuinely non-local
compatibility problem. Preserve owner-authorized semantics; do not impose a universal normalization
policy.
