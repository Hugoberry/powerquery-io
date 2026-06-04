---
title: Time.Hour
---

# Time.Hour


Vrátí komponentu hodin.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Vrátí komponentu hodin předané hodnoty `time`, `datetime` nebo `datetimezone` `dateTime`.


## Examples

### Example #1
Vyhledá hodiny v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
