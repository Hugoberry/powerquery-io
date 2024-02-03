---
title: Time.Second
---

# Time.Second


## Description

Vrátí komponentu sekund.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Vrátí komponentu sekund předané hodnoty <code>time</code>, <code>datetime</code> nebo <code>datetimezone</code> <code>dateTime</code>.


## Examples

### Example #1 
Vyhledá sekundy v hodnotě data a času.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
