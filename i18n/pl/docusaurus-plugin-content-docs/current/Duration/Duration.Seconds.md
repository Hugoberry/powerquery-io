---
title: Duration.Seconds
---

# Duration.Seconds


Zwraca część sekund czasu trwania.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Zwraca część sekund w liczbie: <code>duration</code>.


## Examples

### Example #1 
Wyodrębnij sekundy z wartości czasu trwania.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
