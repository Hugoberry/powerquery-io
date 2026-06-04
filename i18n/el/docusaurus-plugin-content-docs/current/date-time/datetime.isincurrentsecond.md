---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του τρέχοντος δευτερολέπτου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η συγκεκριμένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια του τρέχοντος δευτερολέπτου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίζει αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος δευτερολέπτου.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
