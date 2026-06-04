---
title: Duration.Seconds
---

# Duration.Seconds


Επιστρέφει το τμήμα δευτερολέπτων μιας διάρκειας.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Επιστρέφει το τμήμα δευτερολέπτων του `duration`.


## Examples

### Example #1
Εξαγάγετε τα δευτερόλεπτα από μια τιμή διάρκειας.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
