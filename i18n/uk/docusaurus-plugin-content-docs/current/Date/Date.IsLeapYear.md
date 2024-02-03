---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Указує, чи ця дата припадає на високосний рік.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на високосний рік. <ul>        <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи 2012 рік, представлений &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, є високосним.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
