---
title: Duration.Minutes
---

# Duration.Minutes


Zwraca część minut czasu trwania.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Zwraca część minut w liczbie: `duration`.


## Examples

### Example #1
Wyodrębnij minuty z wartości czasu trwania.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
