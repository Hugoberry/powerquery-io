---
title: Time.Hour
---

# Time.Hour


## Description

Pateikiamas valandų komponentas.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Pateikiamas nurodytos <code>time</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmės valandų komponentas, <code>dateTime</code>.


## Examples

### Example #1 
Raskite valandas #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
