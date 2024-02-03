---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Geeft aan of deze datum in een schrikkeljaar valt.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> in een schrikkeljaar ligt. <ul> <li><code>dateTime</code>: een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li> </ul>


## Examples

### Example #1 
Vaststellen of het jaar 2012, zoals wordt weergegeven met &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; een schrikkeljaar is.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
