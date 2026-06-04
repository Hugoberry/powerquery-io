---
title: Duration.Minutes
---

# Duration.Minutes


Pateikia trukmės minučių dalį.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Pateikiama `duration`minučių dalis.


## Examples

### Example #1
Išskleiskite minutes iš trukmės reikšmės.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
