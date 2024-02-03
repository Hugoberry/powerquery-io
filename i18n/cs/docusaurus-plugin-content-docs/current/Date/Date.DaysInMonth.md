---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Vrátí číslo od 28 do 31 představující počet dní v měsíci.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Vrací číslo představující počet dní v měsíci v hodnotě <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, pro kterou je vrácen počet dní v měsíci.</li>      </ul>


## Examples

### Example #1 
Počet dní v prosinci, jak je přestavováno řetězcem &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
