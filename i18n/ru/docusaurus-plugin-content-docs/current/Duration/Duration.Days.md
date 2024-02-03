---
title: Duration.Days
---

# Duration.Days


## Description

Возвращает дневную часть длительности.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Возвращает дневную часть<code>duration</code>.


## Examples

### Example #1 
Извлечь количество дней между двумя датами.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
