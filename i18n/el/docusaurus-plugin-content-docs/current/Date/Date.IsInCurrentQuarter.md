---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός του τρέχοντος τριμήνου, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή της datetime <code>dateTime</code> εμφανίζεται εντός του τρέχοντος τριμήνου, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      </ul>


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
