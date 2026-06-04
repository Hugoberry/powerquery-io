---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός του τρέχοντος μήνα, όπως αυτός προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή της datetime `dateTime` εμφανίζεται εντός του τρέχοντος μήνα, όπως αυτός προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος μήνα.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
