---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Wskazuje, czy ta data wypada w roku przestępnym.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość typu datetime równa <code>dateTime</code> wypada w roku przestępnym.  <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do obliczenia.</li>      </ul>


## Examples

### Example #1 
Ustal, czy rok 2012 reprezentowany przez wartość &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; jest rokiem przestępnym.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
