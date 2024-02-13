---
title: Date.AddDays
---

# Date.AddDays


Addiert die angegebenen Tage zum Datum.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Gibt das <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Ergebnis zurück, das sich aus der Addition von <code>numberOfDays</code> Tagen zum <code>datetime</code>-Wert '<code>dateTime</code>' ergibt.      <ul>      <li><code>dateTime</code>: Der <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, zu dem Tage addiert werden.</li>      <li><code>numberOfDays</code>: Die Anzahl der zu addierenden Tage.</li>      </ul>


## Examples

### Example #1 
Addiert fünf Tage zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
