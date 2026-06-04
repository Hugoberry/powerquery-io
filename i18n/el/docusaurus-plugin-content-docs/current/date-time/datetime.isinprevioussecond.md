---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του προηγούμενου δευτερολέπτου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια του προηγούμενου δευτερολέπτου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίζει αν το δευτερόλεπτο πριν από την τρέχουσα ώρα συστήματος είναι εντός του προηγούμενου δευτερολέπτου.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
