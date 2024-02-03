---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Devolve o inicio da hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Devolve o inicio da hora representado por <code>dateTime</code>.    <code>dateTime</code> debe ser un valor de <code>time</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Busca o inicio da hora do 10 de outubro de 2011 ás 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
