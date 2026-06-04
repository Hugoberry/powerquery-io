---
title: Time.Second
---

# Time.Second


Returnează componenta second.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Returnează componenta second din valoarea `time`, `datetime` sau `datetimezone` furnizată, `dateTime`.


## Examples

### Example #1
Găsiți a doua valoare dintr-o valoare datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
