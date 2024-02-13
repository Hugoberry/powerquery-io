---
title: Duration.Hours
---

# Duration.Hours


Zwraca część godzin czasu trwania.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Zwraca część godzin w liczbie: <code>duration</code>.


## Examples

### Example #1 
Wyodrębnij godziny z wartości czasu trwania.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
