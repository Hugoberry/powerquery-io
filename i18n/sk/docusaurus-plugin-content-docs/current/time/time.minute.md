---
title: Time.Minute
---

# Time.Minute


Vráti komponent minúty.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Vráti komponent minúty uvedenej hodnoty `time`, `datetime` alebo `datetimezone`, `dateTime`.


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
