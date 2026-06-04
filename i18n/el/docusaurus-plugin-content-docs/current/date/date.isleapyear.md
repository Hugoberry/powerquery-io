---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Υποδεικνύει αν αυτή η ημερομηνία εμπίπτει σε δίσεκτο έτος.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμπίπτει σε δίσεκτο έτος.

-   `dateTime`: Μια τιμή `date`, `datetime` ή `datetimezone` για αξιολόγηση.


## Examples

### Example #1
Προσδιορίστε αν το έτος 2012, όπως αντιπροσωπεύεται από την `#date(2012, 01, 01)` είναι ένα δίσεκτο έτος.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
