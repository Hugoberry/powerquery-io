---
title: Date.AddQuarters
---

# Date.AddQuarters


Addiert die angegebenen Quartale zum Datum.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Gibt das <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Ergebnis zurück, das sich aus der Addition von <code>numberOfQuarters</code> Quartalen zum <code>datetime</code>-Wert '<code>dateTime</code>' ergibt.      <ul>      <li><code>dateTime</code>: Der <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, zu dem Quartale addiert werden.</li>      <li><code>numberOfQuarters</code>: Die Anzahl der zu addierenden Quartale.</li>      </ul>


## Examples

### Example #1 
Addiert ein Quartal zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
