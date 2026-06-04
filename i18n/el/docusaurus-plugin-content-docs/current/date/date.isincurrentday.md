---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός της τρέχουσας ημέρας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή της datetime `dateTime` εμφανίζεται εντός της τρέχουσας ημέρας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν η τρέχουσα ώρα συστήματος είναι εντός της τρέχουσας ημέρας.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
