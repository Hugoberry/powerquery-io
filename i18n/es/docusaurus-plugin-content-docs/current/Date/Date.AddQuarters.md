---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Suma los trimestres especificados a la fecha.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Devuelve el resultado <code>date</code>, <code>datetime</code> o <code>datetimezone</code> obtenido al sumar <code>numberOfQuarters</code> trimestres al valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al que se suman los trimestres.</li>      <li><code>numberOfQuarters</code>: el número de trimestres que se deben sumar.</li>      </ul>


## Examples

### Example #1 
Sumar 1 trimestre al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la fecha 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
