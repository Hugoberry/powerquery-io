---
title: Date.AddWeeks
---

# Date.AddWeeks


Suma las semanas especificadas a la fecha.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Devuelve el resultado <code>date</code>, <code>datetime</code> o <code>datetimezone</code> obtenido al sumar <code>numberOfWeeks</code> semanas al valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al que se suman las semanas.</li>      <li><code>numberOfWeeks</code>: el número de semanas que se deben sumar.</li>      </ul>


## Examples

### Example #1 
Sumar 2 semanas al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
