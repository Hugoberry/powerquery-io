---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των προηγούμενων λεπτών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των προηγούμενων λεπτών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.
-   `minutes`: Το πλήθος λεπτών.


## Examples

### Example #1
Προσδιορίζει αν το λεπτό πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο λεπτών.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
