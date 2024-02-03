---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Devolve o final do ano.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Devolve o final do ano que contén <code>dateTime</code>, incluíndo fraccións de segundo. Consérvase a información do fuso horario.      <ul>        <li><code>dateTime</code>: Un valor de <code>data</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do cal se calcula o final do ano.</li>      </ul>


## Examples

### Example #1 
Obter o final do ano para o 14/05/2011 05:00:00 p.m.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Obter o final da hora para o 17/05/2011 05:00:00 p.m. - 7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
