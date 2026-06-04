---
title: Time.ToRecord
---

# Time.ToRecord


Повертає запис, що містить частини значення часу.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Повертає запис, що містить частини заданого значення часу `time`.

-   `time`: значення `time`, на основі якого слід обчислити запис частин.


## Examples

### Example #1
Перетворити значення `#time(11, 56, 2)` на запис, що містить значення часу.
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
