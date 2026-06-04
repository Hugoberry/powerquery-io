---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Επιστρέφει έναν αριθμό που υποδεικνύει σε ποιο τρίμηνο εμπίπτει η ημερομηνία.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει έναν αριθμό από 1 έως 4 που υποδεικνύει σε ποιο τρίμηνο εμπίπτει η ημερομηνία `dateTime`. Η τιμή `dateTime` μπορεί να είναι μια τιμή `date`, `datetime` ή `datetimezone`.


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
