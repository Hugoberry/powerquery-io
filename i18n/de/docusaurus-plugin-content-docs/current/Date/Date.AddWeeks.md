---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Addiert die angegebenen Wochen zum Datum.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Gibt das <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Ergebnis zurück, das sich aus der Addition von <code>numberOfWeeks</code> Wochen zum <code>datetime</code>-Wert '<code>dateTime</code>' ergibt.      <ul>      <li><code>dateTime</code>: Der <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, zu dem Wochen addiert werden.</li>      <li><code>numberOfWeeks</code>: Die Anzahl der zu addierenden Wochen.</li>      </ul>


## Examples

### Example #1 
Addiert zwei Wochen zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
