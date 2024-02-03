---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός του τρέχοντος έτους, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή της datetime <code>dateTime</code> εμφανίζεται εντός του τρέχοντος έτους, όπως αυτό προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      </ul>


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
