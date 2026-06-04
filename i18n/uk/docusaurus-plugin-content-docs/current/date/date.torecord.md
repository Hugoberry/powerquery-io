---
title: Date.ToRecord
---

# Date.ToRecord


Повертає запис, що містить частини значення дати.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Повертає запис, що містить частини заданого значення дати `date`.

-   `date`: значення `date`, на основі якого слід обчислити запис частин.


## Examples

### Example #1
Перетворити значення `#date(2011, 12, 31)` на запис, що містить частини значення дати.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
