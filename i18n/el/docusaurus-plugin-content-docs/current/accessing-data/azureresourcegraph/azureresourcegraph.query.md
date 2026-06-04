---
title: AzureResourceGraph.Query
---

# AzureResourceGraph.Query



## Syntax

```powerquery
AzureResourceGraph.Query(
    query as text,
    optional scope as text,
    optional subscription as text,
    optional managementGroup as text,
    optional options as record
) as table
```


## Remarks

Δείτε https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli για δείγματα ερωτημάτων εκκίνησης.


## Examples

### Example #1
Επιστρέψτε έναν πίνακα με αποτελέσματα ερωτημάτων για "πόρους" ερωτήματος χρήστη
```powerquery
AzureResourceGraph.Query("resources")
```



