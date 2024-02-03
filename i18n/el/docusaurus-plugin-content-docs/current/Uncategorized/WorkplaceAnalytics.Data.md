---
title: WorkplaceAnalytics.Data
---

# WorkplaceAnalytics.Data



## Syntax

```powerquery
WorkplaceAnalytics.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional schemaType as text
) as table
```


## Details

Εισαγάγετε εβδομαδιαία μετρικά και δεδομένα χαρακτηριστικών από το Workplace Analytics.


## Examples

### Example #1 
Επιστρέφει έναν πίνακα με ορατά χαρακτηριστικά και εβδομαδιαία μετρικά για κάθε μετρημένο εργαζόμενο στο διαμέρισμα.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



