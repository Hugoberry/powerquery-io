---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των προηγούμενων ετών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος έτους.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των προηγούμενων ετών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος έτους.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.
-   `years`: Το πλήθος ετών.


## Examples

### Example #1
Προσδιορίστε αν το έτος πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο ετών.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
