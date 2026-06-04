---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Повертає запис, що містить частини значення дати й часу.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Повертає запис, що містить частини заданого значення дати й часу `dateTime`.

-   `dateTime`: значення `datetime`, на основі якого слід обчислити запис частин.


## Examples

### Example #1
Перетворити значення `#datetime(2011, 12, 31, 11, 56, 2)` на запис, що містить значення дати й часу.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
