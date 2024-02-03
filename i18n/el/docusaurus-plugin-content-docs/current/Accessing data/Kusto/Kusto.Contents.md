---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Εισάγει δεδομένα από το Azure Data Explorer (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Εισάγει δεδομένα από την παρουσία Azure Data Explorer (Kusto) που διαθέτετε


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



