---
title: Time.Minute
---

# Time.Minute


## Description

Pateikiamas minučių komponentas.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Pateikiamas nurodytos <code>time</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmės minučių komponentas, <code>dateTime</code>.


## Examples

### Example #1 
Raskite minutes #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
