---
title: Date.Day
---

# Date.Day


## Description

Vraća komponentu dana.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Vraća komponentu vrednosti dana <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izdvaja komponenta dana.</li>      </ul>


## Examples

### Example #1 
Izračunavanje komponente dana vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011. i vreme 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
