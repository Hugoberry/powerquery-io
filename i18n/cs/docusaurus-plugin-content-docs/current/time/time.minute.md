---
title: Time.Minute
---

# Time.Minute


Vrátí komponentu minut.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Vrátí komponentu minut předané hodnoty `time`, `datetime` nebo `datetimezone` `dateTime`.


## Examples

### Example #1
Vyhledá minuty v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
