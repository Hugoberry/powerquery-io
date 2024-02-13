---
title: Date.AddMonths
---

# Date.AddMonths


Addiert die angegebenen Monate zum Datum.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Gibt das <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Ergebnis der Addition von <code>numberOfMonths</code> Monaten zum <code>datetime</code>-Wert "<code>dateTime</code>" zurück.      <ul>        <li><code>dateTime</code>: Der <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, zu dem Monate addiert werden.</li>        <li><code>numberOfMonths</code>: Die Anzahl der zu addierenden Monate.</li>      </ul>


## Examples

### Example #1 
Addiert fünf Monate zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Addiert 18 Monate zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011, 08:15:22 Uhr.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
