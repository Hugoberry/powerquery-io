---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του τρέχοντος λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η συγκεκριμένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια του τρέχοντος λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίζει αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος λεπτού.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
