---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Возвращает число от 28 до 31, указывающее число дней в месяце.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Возвращает число дней в месяце в значении <code>date</code>, <code>datetime</code> или <code>datetimezone</code>: <code>dateTime</code>. <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, для которого возвращается число дней в месяце.</li>      </ul>


## Examples

### Example #1 
Число дней в декабре, представленное как &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
