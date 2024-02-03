---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Retorna o início do trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Retorna o início do trimestre que contém <code>dateTime</code>.      <code>dateTime</code> deve ser um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Encontre o início do trimestre de 10 de outubro de 2011, às 8h.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
