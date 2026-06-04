---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του προηγούμενου λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια του προηγούμενου λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίζει αν το λεπτό πριν από την τρέχουσα ώρα συστήματος είναι εντός του προηγούμενου λεπτού.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
