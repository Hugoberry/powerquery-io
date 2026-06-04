---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός του τρέχοντος τριμήνου, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή της datetime `dateTime` εμφανίζεται εντός του τρέχοντος τριμήνου, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος τριμήνου.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
