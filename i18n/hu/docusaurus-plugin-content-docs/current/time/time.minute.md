---
title: Time.Minute
---

# Time.Minute


A perc összetevőt adja vissza.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

A megadott `time`, `datetime` vagy `datetimezone` típusú `dateTime` érték perc összetevőjét adja vissza.


## Examples

### Example #1
A perc megállapítása a #datetime(2011, 12, 31, 9, 15, 36) értékből
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
