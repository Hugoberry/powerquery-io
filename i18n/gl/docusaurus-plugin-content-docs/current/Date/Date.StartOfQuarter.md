---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Devolve o inicio do trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Devolve o inicio do trimestre que contén <code>dateTime</code>.      <code>dateTime</code> debe ser un valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Busca o inicio do trimestre do 10 de outubro de 2011 ás 08:00 horas.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
