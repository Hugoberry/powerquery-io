---
title: Duration.Minutes
---

# Duration.Minutes


Επιστρέφει το τμήμα λεπτών μιας διάρκειας.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Επιστρέφει το τμήμα λεπτών του `duration`.


## Examples

### Example #1
Εξαγάγετε τα λεπτά από μια τιμή διάρκειας.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
