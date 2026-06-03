---
title: Time.ToRecord
---

# Time.ToRecord


Возвращает запись, содержащую части значения Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Возвращает запись, содержащую части заданного значения времени, `time`.

-   `time`: значение `time`, для которого необходимо вычислить запись частей.


## Examples

### Example #1
Преобразовать значение `#time(11, 56, 2)` в запись, содержащую значения времени.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
