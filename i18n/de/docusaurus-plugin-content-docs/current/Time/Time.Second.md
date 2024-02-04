---
title: Time.Second
---

# Time.Second


## Description

Gibt die Sekundenkomponente zurück.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Gibt die Sekundenkomponente des angegebenen <code>time</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Werts "<code>dateTime</code>" zurück.


## Examples

### Example #1 
Ermittelt den zweiten Wert aus einem datetime-Wert.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
