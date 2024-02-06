---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Gibt an, ob dieses Datum in einem Schaltjahr liegt.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Gibt an, ob der angegebene datetime-Wert "<code>dateTime</code>" in einem Schaltjahr liegt. <ul>        <li><code>dateTime</code>: Ein auszuwertender <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob das als &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; dargestellte Jahr 2012 ein Schaltjahr ist.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
