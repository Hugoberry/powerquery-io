---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των προηγούμενων ημερών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ημέρας.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των προηγούμενων ημερών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ημέρας.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.
-   `days`: Το πλήθος ημερών.


## Examples

### Example #1
Προσδιορίστε αν η ημέρα πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο ημερών.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
