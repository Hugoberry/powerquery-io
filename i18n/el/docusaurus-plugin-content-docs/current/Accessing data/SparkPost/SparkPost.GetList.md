---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Αυτή η λειτουργία μπορεί να χρησιμοποιηθεί για να καλέσετε οποιαδήποτε από τα τελικά σημεία "Λίστες" που παρέχονται από το SparkPost API v1. Όταν κάνετε κλήσεις στο SparkPost API χρησιμοποιώντας αυτή τη συνάρτηση, να θυμάστε ότι το SparkPost API έχει ένα αυστηρό όριο ρυθμού API. Αν ο διακομιστής του SparkPost επιστρέφει έναν κωδικό κατάστασης 429, έχετε συμπληρώσει το όριο ρυθμού και θα πρέπει να περιμένετε λίγα λεπτά πριν κάνετε άλλες κλήσεις.


## Examples

### Example #1 
Επιστρέφει έναν πίνακα με μία μόνο στήλη συμπληρωμένη με δεδομένα από ένα από τα τελικά σημεία &#34;Λίστες&#34; του SparkPost API v1 (δείτε την τεκμηρίωση του SparkPost για λεπτομέρειες).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



