---
title: Time.Second
---

# Time.Second


## Description

Retorna el component segon.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Retorna el component segon del valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> proporcionat, <code>dateTime</code>.


## Examples

### Example #1 
Cerca el segon valor d&#39;un valor datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
