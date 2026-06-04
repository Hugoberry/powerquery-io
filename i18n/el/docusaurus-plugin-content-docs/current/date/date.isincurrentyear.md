---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός του τρέχοντος έτους, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή της datetime `dateTime` εμφανίζεται εντός του τρέχοντος έτους, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος έτους.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
