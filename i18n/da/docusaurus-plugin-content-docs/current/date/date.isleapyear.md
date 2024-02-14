---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Angiver, om denne dato ligger i et skudår.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> ligger i et skudår. <ul>        <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, der skal evalueres.</li>      </ul>


## Examples

### Example #1 
Afgør, om året 2012, som repræsenteres ved &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, er et skudår.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
