---
title: Time.Second
---

# Time.Second


Vráti komponent sekundy.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Vráti komponent sekundy uvedenej hodnoty `time`, `datetime` alebo `datetimezone`, `dateTime`.


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
