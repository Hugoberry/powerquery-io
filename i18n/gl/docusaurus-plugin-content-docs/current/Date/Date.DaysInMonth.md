---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Devolve un número de 28 a 31 que indica o número de días do mes.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Devolve o número de días do mes no valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> para o que se devolve o número de días do mes.</li>      </ul>


## Examples

### Example #1 
Número de días no mes de decembro representado por &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
