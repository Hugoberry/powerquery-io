---
title: Date.AddYears
---

# Date.AddYears


## Description

Engade os anos especificados á data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Devolve o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> tras engadir <code>numberOfYears</code> ao valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao que se van engadir os anos.</li>        <li><code>numberOfYears</code>: o número de anos que se van engadir.</li>      </ul>


## Examples

### Example #1 
Engadir 4 anos ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/05/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Engadir 10 anos ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data e a hora 14/05/2011 08:15:22 a.m.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
