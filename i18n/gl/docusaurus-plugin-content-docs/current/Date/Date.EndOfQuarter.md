---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Devolve o final do trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Devolve o final do trimestre que contén <code>dateTime</code>. Consérvase a información do fuso horario.      <ul>      <li><code>dateTime</code>: Un valor de <code>data</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do cal se calcula o final do trimestre.</li>      </ul>


## Examples

### Example #1 
Busca o final do trimestre do 10 de outubro de 2011 ás 08:00 horas.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
