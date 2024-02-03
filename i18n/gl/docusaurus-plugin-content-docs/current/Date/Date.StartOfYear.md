---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Devolve o inicio do ano.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Devolve o inicio do ano que contén <code>dateTime</code>.      <code>dateTime</code> debe ser un valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Busca o inicio do ano do 10 de outubro de 2011 ás 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
