---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Engade as semanas especificadas á data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Devolve <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>, resultado de engadir <code>numberOfWeeks</code> semanas ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao que se van engadir as semanas.</li>      <li><code>numberOfWeeks</code>: o número de semanas que se van engadir.</li>      </ul>


## Examples

### Example #1 
Engadir 2 semanas ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/05/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
