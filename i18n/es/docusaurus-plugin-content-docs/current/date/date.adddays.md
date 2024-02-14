---
title: Date.AddDays
---

# Date.AddDays


Suma los días especificados a la fecha.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Devuelve el resultado <code>date</code>, <code>datetime</code> o <code>datetimezone</code> obtenido al sumar <code>numberOfDays</code> días al valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al que se suman los días.</li>      <li><code>numberOfDays</code>: el número de días que se deben sumar.</li>      </ul>


## Examples

### Example #1 
Sumar 5 días al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
