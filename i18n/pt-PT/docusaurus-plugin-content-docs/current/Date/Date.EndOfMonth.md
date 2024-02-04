---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Devolve o fim do mês.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Devolve o fim do mês que contém <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do qual o fim do mês é calculado</li>      </ul>


## Examples

### Example #1 
Obter o fim do mês para 14/5/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Obter o fim do mês para 17/5/2011 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
