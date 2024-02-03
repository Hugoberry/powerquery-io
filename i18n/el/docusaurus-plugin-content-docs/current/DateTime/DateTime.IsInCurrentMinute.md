---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του τρέχοντος λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η συγκεκριμένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια του τρέχοντος λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος λεπτού.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
