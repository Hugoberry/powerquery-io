---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια της επόμενης ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια της επόμενης ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίζει αν η ώρα μετά την τρέχουσα ώρα συστήματος είναι εντός της επόμενης ώρας.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
