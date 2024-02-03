---
title: Time.Minute
---

# Time.Minute


## Description

Vráti komponent minúty.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Vráti komponent minúty uvedenej hodnoty <code>time</code>, <code>datetime</code> alebo <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Vyhľadajte minútu v hodnote #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
