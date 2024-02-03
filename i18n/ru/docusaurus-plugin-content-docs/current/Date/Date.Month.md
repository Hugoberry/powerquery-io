---
title: Date.Month
---

# Date.Month


## Description

Возвращает компонент месяца.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Возвращает компонент месяца заданного значения <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Найти компонент месяца в #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
