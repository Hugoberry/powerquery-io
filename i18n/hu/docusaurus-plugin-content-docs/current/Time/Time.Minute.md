---
title: Time.Minute
---

# Time.Minute


## Description

A perc összetevőt adja vissza.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

A megadott <code>time</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú <code>dateTime</code> érték perc összetevőjét adja vissza.


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
