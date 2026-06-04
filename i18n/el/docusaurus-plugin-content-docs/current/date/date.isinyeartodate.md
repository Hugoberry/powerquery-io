---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στο τρέχον έτος και αν συμπίπτει ή είναι προγενέστερη της τρέχουσας ημέρας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στο τρέχον έτος και αν συμπίπτει ή είναι προγενέστερη της τρέχουσας ημέρας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος έτους μέχρι σήμερα.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
