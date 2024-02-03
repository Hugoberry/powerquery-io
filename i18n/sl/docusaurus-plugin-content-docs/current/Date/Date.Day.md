---
title: Date.Day
---

# Date.Day


## Description

Vrne komponento dneva.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Vrne komponento dneva vrednosti <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, iz katere se določi komponenta dneva.</li>      </ul>


## Examples

### Example #1 
Pridobite komponento dneva vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum in čas 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
