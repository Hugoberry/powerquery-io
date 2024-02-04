---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Devolve o início do ano.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Devolve o início do ano que contém <code>dateTime</code>.    <code>dateTime</code> tem de ser um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Encontre o início do ano para 10 de outubro de 2011, às 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
