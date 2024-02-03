---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Vrne zapis, ki vsebuje dele vrednosti &#34;date&#34;.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Vrne zapis, ki vsebuje dele dane datumske vrednosti, <code>date</code>. <ul>        <li><code>date</code>: vrednost <code>date</code>, iz katere bo izračunan zapis njenih delov.</li>      </ul>


## Examples

### Example #1 
Pretvorite vrednost &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; v zapis, ki vsebuje dele datumske vrednosti.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
