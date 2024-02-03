---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Повертає число від 28 до 31, що представляє кількість днів у місяці.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Повертає кількість днів у місяці у значенні <code>date</code>, <code>datetime</code> або <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, для якого повертається кількість днів у місяці.</li>      </ul>


## Examples

### Example #1 
Кількість днів у місяці грудні, який представлено таким чином: &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
