---
title: DateTime.Time
---

# DateTime.Time


## Description

Restituisce la parte dell&#39;ora del valore datetime specificato.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Restituisce la parte dell'ora del valore datetime specificato <code>dateTime</code>.


## Examples

### Example #1 
Trovare il valore di ora di #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
