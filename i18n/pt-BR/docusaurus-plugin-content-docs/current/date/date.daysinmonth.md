---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Retorna um número de 28 a 31 que indica o número de dias do mês.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Retorna o número de dias do mês no valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> para o qual o número de dias do mês é retornado.</li>      </ul>


## Examples

### Example #1 
Número de dias do mês de dezembro conforme representado por &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
