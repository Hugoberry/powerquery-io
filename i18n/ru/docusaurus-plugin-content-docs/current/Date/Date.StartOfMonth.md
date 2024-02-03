---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Возвращает начало месяца.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Возвращает начало месяца, который содержит <code>dateTime</code>.    <code>dateTime</code> должно быть значением <code>date</code> или <code>datetime</code>.


## Examples

### Example #1 
Поиск начала месяца для 10 октября 2011 г., 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
