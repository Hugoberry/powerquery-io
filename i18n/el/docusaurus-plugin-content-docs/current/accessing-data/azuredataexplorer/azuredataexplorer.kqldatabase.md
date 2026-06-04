---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Εισαγωγή δεδομένων από σύμπλεγμα Fabric Kusto σε λειτουργία εντοπισμού.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Εισάγει δεδομένα από την παρουσία της βάσης δεδομένων KQL


## Examples

### Example #1
Επιστρέφει έναν πίνακα πληροφοριών συμβάντων Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Ένας πίνακας με συμβάντα Storm από τη βάση δεδομένων "Δείγματα" στο σύμπλεγμα "Βοήθεια"
```



