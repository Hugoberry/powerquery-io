---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Returnează un număr de la 28 la 31, care indică numărul de zile din lună.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Returnează numărul de zile din lună din valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> pentru care se returnează numărul de zile din lună.</li>      </ul>


## Examples

### Example #1 
Numărul de zile din luna decembrie este reprezentat prin &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
