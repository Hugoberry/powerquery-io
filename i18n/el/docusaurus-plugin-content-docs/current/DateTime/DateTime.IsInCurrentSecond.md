---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του τρέχοντος δευτερολέπτου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η συγκεκριμένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια του τρέχοντος δευτερολέπτου, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν η τρέχουσα ώρα συστήματος είναι εντός του τρέχοντος δευτερολέπτου.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
