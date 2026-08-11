# Partial Commit and Prefix-State Safety

Activate `PARTIAL_COMMIT_TRIGGER` when an operation has multiple externally observable effects or
state transitions and execution can fail, cancel, crash, retry, or be interrupted after an earlier
effect but before completion.

Inspect decision-relevant cut points, not every instruction:

```text
s0 -> s1 -> ... -> sk -> ... -> sn
```

For each reachable prefix at which failure can occur, require at least one:

1. the bound invariant still holds;
2. rollback/compensation restores an acceptable state;
3. the partial state is explicitly acceptable under the owner contract.

Also check whether retry/recovery duplicates earlier effects, loses ownership/identity, or observes
ambiguous completion. A safe final state on the all-success path does not establish prefix safety.

This is a targeted atomicity/compensation check. Do not import full database ACID doctrine unless the
owner/domain independently requires it.
