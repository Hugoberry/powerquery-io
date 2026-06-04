---
title: Duration.ToRecord
---

# Duration.ToRecord


Повертає запис, що містить частини тривалості.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Повертає запис, що містить частини значення тривалості `duration`.

-   `duration`: значення `duration`, на основі якого створюється запис.


## Examples

### Example #1
Перетворіть тривалість `#duration(2, 5, 55, 20)` на запис із її частин, включно із днями, годинами, хвилинами й секундами, якщо це доречно.
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
