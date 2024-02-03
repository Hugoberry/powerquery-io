---
title: Time.Second
---

# Time.Second


## Description

Pateikiamas antrasis komponentas.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Pateikiamas nurodytos <code>time</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmės antrasis komponentas (<code>dateTime</code>).


## Examples

### Example #1 
Raskite antrąją reikšmę iš reikšmės Data / laikas.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
