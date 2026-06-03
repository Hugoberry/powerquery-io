---
title: Time.StartOfHour
---

# Time.StartOfHour


Возвращает начало часа.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Возвращает начало часа, который представлен с использованием `dateTime`. `dateTime` должно быть значением `time`, `datetime` или `datetimezone`.


## Examples

### Example #1
Поиск начала часа для 10 октября 2011 г., 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
