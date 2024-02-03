---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται εντός της τρέχουσας εβδομάδας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή της datetime <code>dateTime</code> εμφανίζεται εντός της τρέχουσας εβδομάδας, όπως αυτή προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      </ul>


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
