---
title: Date.AddYears
---

# Date.AddYears


## Description

Addiert die angegebenen Jahre zum Datum.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Gibt das <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Ergebnis der Addition von <code>numberOfYears</code> Jahr(en) zum <code>datetime</code>-Wert "<code>dateTime</code>" zurück.      <ul>        <li><code>dateTime</code>: Der <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, zu dem Jahre addiert werden.</li>        <li><code>numberOfYears</code>: Die Anzahl der zu addierenden Jahre.</li>      </ul>


## Examples

### Example #1 
Addiert vier Jahre zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Addiert 10 Jahre zum &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- oder &lt;code&gt;datetimezone&lt;/code&gt;-Wert für den 14.05.2011, 08:15:22 Uhr.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
