---
title: Time.Second
---

# Time.Second


Vrátí komponentu sekund.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Vrátí komponentu sekund předané hodnoty `time`, `datetime` nebo `datetimezone` `dateTime`.


## Examples

### Example #1
Vyhledá sekundy v hodnotě data a času.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
