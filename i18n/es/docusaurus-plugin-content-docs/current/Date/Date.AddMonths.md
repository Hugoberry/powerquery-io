---
title: Date.AddMonths
---

# Date.AddMonths


Suma los meses especificados a la fecha.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Devuelve el valor <code>date</code><code>datetime</code> o <code>datetimezone</code> como resultado de sumar <code>numberOfMonths</code> meses al valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: el valor <code>date</code><code>datetime</code> o <code>datetimezone</code> al que se suman los meses.</li>        <li><code>numberOfMonths</code>: número de meses que se sumarán.</li>      </ul>


## Examples

### Example #1 
Sumar 5 meses al valor &lt;code&gt;date&lt;/code&gt;&lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Sumar 18 meses al valor &lt;code&gt;date&lt;/code&gt;&lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha y la hora 5/14/2011 08:15:22 a.m.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
