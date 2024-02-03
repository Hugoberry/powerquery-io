---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Επιστρέφει έναν αριθμό που υποδεικνύει σε ποιο τρίμηνο εμπίπτει η ημερομηνία.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Επιστρέφει έναν αριθμό από 1 έως 4 που υποδεικνύει σε ποιο τρίμηνο εμπίπτει η ημερομηνία <code>dateTime</code>. Η τιμή <code>dateTime</code> μπορεί να είναι μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.


## Examples

### Example #1 
Βρείτε σε ποιο τρίμηνο του έτους εμπίπτει η ημερομηνία #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
