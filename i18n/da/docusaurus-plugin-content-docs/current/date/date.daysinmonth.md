---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Returnerer et tal fra 28-31, som angiver antallet af dage i måneden.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Returnerer antallet af dage i måneden i værdien af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som antallet af dage i måneden returneres for.</li>      </ul>


## Examples

### Example #1 
Antallet af dage i december måned repræsenteret ved &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
