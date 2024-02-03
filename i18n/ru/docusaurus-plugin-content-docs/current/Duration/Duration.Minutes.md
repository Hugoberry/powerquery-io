---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Возвращает минутную часть длительности.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Возвращает минутную часть <code>duration</code>.


## Examples

### Example #1 
Извлечь минуты из значения длительности.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
