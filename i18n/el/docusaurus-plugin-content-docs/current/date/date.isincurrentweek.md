---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός της τρέχουσας εβδομάδας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή της datetime `dateTime` εμφανίζεται εντός της τρέχουσας εβδομάδας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν η τρέχουσα ώρα συστήματος είναι εντός της τρέχουσας εβδομάδας.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
