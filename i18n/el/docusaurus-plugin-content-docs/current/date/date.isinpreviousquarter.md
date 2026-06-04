---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια του προηγούμενου τριμήνου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος τριμήνου.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια του προηγούμενου τριμήνου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος τριμήνου.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν το τρίμηνο πριν από την τρέχουσα ώρα συστήματος είναι εντός του προηγούμενου τριμήνου.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
