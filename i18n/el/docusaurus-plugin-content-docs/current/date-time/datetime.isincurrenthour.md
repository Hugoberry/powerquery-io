---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια της τρέχουσας ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η συγκεκριμένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια της τρέχουσας ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.


## Examples

### Example #1
Προσδιορίζει αν η τρέχουσα ώρα συστήματος είναι εντός της τρέχουσας ώρας.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
