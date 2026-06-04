---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια του προηγούμενου μήνα, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος μήνα.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια του προηγούμενου μήνα, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος μήνα.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν ο μήνας πριν από την τρέχουσα ώρα συστήματος είναι εντός του προηγούμενου μήνα.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
