---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Devuelve un número del 28 al 31 que indica el número de días del mes.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Devuelve el número de días del mes en el valor de <code>date</code>, <code>datetime</code> o <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para el que se devuelve el número de días del mes.</li>      </ul>


## Examples

### Example #1 
Número de días del mes de diciembre según se representa con &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
