---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Επιστρέφει έναν πίνακα διαθέσιμων μετρικών από το SparkPost API v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Αυτή η λειτουργία μπορεί να χρησιμοποιηθεί για την ανάκτηση δεδομένων από ένα συγκεκριμένο τελικό σημείο "Μετρικά" από το SparkPost API v1. Όταν ανανεώνετε αυτούς τους πίνακες ή κάνετε κλήσεις στο SparkPost API χρησιμοποιώντας αυτό το λογισμικό σύνδεσης, να θυμάστε ότι το SparkPost API έχει αυστηρό όριο ρυθμού API. Αν ο διακομιστής του SparkPost επιστρέφει έναν κωδικό κατάστασης 429, έχετε συμπληρώσει το όριο ρυθμού και θα πρέπει να περιμένετε λίγα λεπτά πριν κάνετε άλλες κλήσεις. Κατά την επιλογή μιας τιμής για την παράμετρο Number of days, λάβετε υπόψη ότι το API αποθηκεύει μόνο 6 μήνες δεδομένων.


## Examples

### Example #1 
Ανακτά τα μετρικά παράδοσης count_sent και count_rejected για όλα τα campaign_ids που συγκεντρώθηκαν τις τελευταίες τρεις ημέρες. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
πίνακας
```



