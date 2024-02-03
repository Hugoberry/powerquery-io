---
title: Date.AddDays
---

# Date.AddDays


## Description

Engade os días especificados á data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Devolve <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>, resultado de engadir <code>numberOfDays</code> días ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao se van engadir os días.</li>      <li><code>numberOfDays</code>: o número de días que se van engadir.</li>      </ul>


## Examples

### Example #1 
Engadir 5 días ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/05/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
