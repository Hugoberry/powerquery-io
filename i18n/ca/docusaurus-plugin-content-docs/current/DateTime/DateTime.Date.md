---
title: DateTime.Date
---

# DateTime.Date


## Description

Retorna el component data d&#39;un valor de data, de data i hora o de fus horari concret.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Retorna el component data de <code>dateTime</code>, el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> donat.


## Examples

### Example #1 
Troba el valor date de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
