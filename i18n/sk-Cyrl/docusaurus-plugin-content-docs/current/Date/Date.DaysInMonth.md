---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Vráti číslo od 28 do 31 udávajúce počet dní v mesiaci.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Vráti počet dní v mesiaci v rámci hodnoty <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, pre ktorú sa vráti počet dní v mesiaci.</li>      </ul>


## Examples

### Example #1 
Počet dní v mesiaci december je vyjadrený hodnotou &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
