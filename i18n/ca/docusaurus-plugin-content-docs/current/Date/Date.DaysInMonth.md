---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Retorna un nombre del 28 al 31 que indica el nombre de dies del mes.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Retorna el nombre de dies del mes del valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> per al qual es retorna el nombre de dies del mes.</li>      </ul>


## Examples

### Example #1 
Nombre de dies del mes de desembre representat per &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
