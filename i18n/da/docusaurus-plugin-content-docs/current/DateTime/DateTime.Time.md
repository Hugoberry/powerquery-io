---
title: DateTime.Time
---

# DateTime.Time


## Description

Returnerer klokkeslætsdelen for den angivne værdi af typen datetime.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Returnerer klokkeslætsdelen for den angivne værdi af typen datetime, <code>dateTime</code>.


## Examples

### Example #1 
Find klokkeslætsværdien for #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
