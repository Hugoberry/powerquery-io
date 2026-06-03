---
title: Duration.ToRecord
---

# Duration.ToRecord


Возвращает запись, содержащую части длительности.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Возвращает запись, содержащую части значения длительности, `duration`.

-   `duration`: значение `duration`, на основе которого создается запись.


## Examples

### Example #1
Преобразование `#duration(2, 5, 55, 20)` в запись его частей, включая дни, часы, минуты и секунды, если таковые имеются.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
