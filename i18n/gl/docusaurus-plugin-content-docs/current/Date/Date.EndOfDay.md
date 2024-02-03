---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Devolve o final do día.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Devolve o final do día representado por <code>dateTime</code>. Consérvase a información da zona horaria.      <ul>      <li><code>dateTime</code>: un valor de <code>data</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do cal se calcula o final do día.</li>      </ul>


## Examples

### Example #1 
Obter o final do día para o 14/05/2011 05:00:00 p.m.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Obter o final do día para o 17/05/2011 05:00:00 p.m. - 7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
