---
title: Time.Second
---

# Time.Second


## Description

Returnează componenta second.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Returnează componenta second din valoarea <code>time</code>, <code>datetime</code> sau <code>datetimezone</code> furnizată, <code>dateTime</code>.


## Examples

### Example #1 
Găsiți a doua valoare dintr-o valoare datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
