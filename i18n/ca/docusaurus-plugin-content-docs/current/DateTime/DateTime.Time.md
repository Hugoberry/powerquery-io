---
title: DateTime.Time
---

# DateTime.Time


## Description

Retorna la part de l&#39;hora del valor datetime donat.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Retorna la part de l'hora del valor datetime donat, <code>dateTime</code>.


## Examples

### Example #1 
Troba el valor time de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
