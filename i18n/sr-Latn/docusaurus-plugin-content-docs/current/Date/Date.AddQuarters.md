---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Dodaje navedene kvartale u datum.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Vraća rezultat <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> od dodavanja <code>numberOfQuarters</code> kvartala u vrednost <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> u koju se dodaju kvartali.</li>      <li><code>numberOfQuarters</code>: Broj kvartala koji se dodaju.</li>      </ul>


## Examples

### Example #1 
Dodavanje 1 kvartala vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
