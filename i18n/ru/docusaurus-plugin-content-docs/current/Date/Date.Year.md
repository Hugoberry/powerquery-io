---
title: Date.Year
---

# Date.Year


## Description

Возвращает компонент года.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Возвращает компонент года заданного значения <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Поиск компонента года в значении #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
