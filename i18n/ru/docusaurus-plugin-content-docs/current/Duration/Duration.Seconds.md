---
title: Duration.Seconds
---

# Duration.Seconds


Возвращает секундную часть длительности.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Возвращает секундную часть <code>duration</code>.


## Examples

### Example #1 
Извлечь секунды из значения длительности.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
