---
title: Duration.Hours
---

# Duration.Hours


Возвращает часовую часть длительности.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Возвращает часовую часть <code>duration</code>.


## Examples

### Example #1 
Извлечь часы из значения длительности.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
