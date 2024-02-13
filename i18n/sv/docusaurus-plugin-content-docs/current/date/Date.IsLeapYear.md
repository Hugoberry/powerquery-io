---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Anger om det här datumet infaller under ett skottår.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Anger om det givna datetime-värdet <code>dateTime</code> infaller under ett skottår. <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om år 2012, representerat av &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, är ett skottår.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
