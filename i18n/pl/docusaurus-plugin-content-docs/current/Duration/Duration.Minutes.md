---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Zwraca część minut czasu trwania.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Zwraca część minut w liczbie: <code>duration</code>.


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
