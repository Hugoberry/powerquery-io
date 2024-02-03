---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στο τρέχον έτος και αν συμπίπτει ή είναι προγενέστερη της τρέχουσας ημέρας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στο τρέχον έτος και αν συμπίπτει ή είναι προγενέστερη της τρέχουσας ημέρας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      </ul>


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
