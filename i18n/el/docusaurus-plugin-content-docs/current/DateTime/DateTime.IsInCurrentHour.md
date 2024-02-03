---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια της τρέχουσας ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η συγκεκριμένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια της τρέχουσας ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν η τρέχουσα ώρα συστήματος είναι εντός της τρέχουσας ώρας.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
