---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των προηγούμενων ωρών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των προηγούμενων ωρών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.
-   `hours`: Το πλήθος ωρών.


## Examples

### Example #1
Προσδιορίζει αν η ώρα πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο ωρών.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
