---
title: Time.Second
---

# Time.Second


## Description

Vrne komponento sekunde.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Vrne komponento sekunde podane vrednosti <code>time</code>, <code>datetime</code> ali <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Poiščite vrednost sekunde v vrednosti &#34;datetime&#34;.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
