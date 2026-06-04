---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των προηγούμενων τριμήνων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος τριμήνου.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των προηγούμενων τριμήνων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος τριμήνου.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.
-   `quarters`: Το πλήθος τριμήνων.


## Examples

### Example #1
Προσδιορίστε αν το τρίμηνο πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο τριμήνων.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
