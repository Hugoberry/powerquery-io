---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Vraća broj od 28 do 31 koji ukazuje na broj dana u mesecu.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Vraća broj dana u mesecu u vrednosti <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za koju se vraća broj dana u mesecu.</li>      </ul>


## Examples

### Example #1 
Broj dana u mesecu decembru koji su predstavljeni pomoću &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
