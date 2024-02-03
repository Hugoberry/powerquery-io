---
title: Time.Second
---

# Time.Second


## Description

Vráti komponent sekundy.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Vráti komponent sekundy uvedenej hodnoty <code>time</code>, <code>datetime</code> alebo <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Nájdite hodnotu sekundy z hodnoty dátumu a času.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
