---
title: Time.Hour
---

# Time.Hour


## Description

Az óra összetevőt adja vissza.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

A megadott <code>time</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú <code>dateTime</code> érték óra összetevőjét adja vissza.


## Examples

### Example #1 
Az óra megállapítása a #datetime(2011, 12, 31, 9, 15, 36) értékből
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
