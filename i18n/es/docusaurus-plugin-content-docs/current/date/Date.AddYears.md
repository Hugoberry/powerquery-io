---
title: Date.AddYears
---

# Date.AddYears


Suma los años especificados a la fecha.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Devuelve el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> como resultado de sumar <code>numberOfYears</code> a un valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al que se suman los años.</li>        <li><code>numberOfYears</code>: número de años que se sumarán.</li>      </ul>


## Examples

### Example #1 
Sumar 4 años al valor &lt;code&gt;date&lt;/code&gt;&lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Sumar 10 años al valor &lt;code&gt;date&lt;/code&gt;&lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha y la hora 5/14/2011 08:15:22 a.m.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
