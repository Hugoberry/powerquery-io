---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Указывает, приходится ли эта дата на високосный год.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли указанное значение datetime <code>dateTime</code> на високосный год. <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, которое необходимо оценить.</li>      </ul>


## Examples

### Example #1 
Определить, является ли 2012 год, представленный &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, високосным.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
