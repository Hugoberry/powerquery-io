---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Vrne zapis, ki vsebuje dele vrednosti &#34;datetime&#34;.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Vrne zapis, ki vsebuje dele dane vrednosti "datetime", <code>dateTime</code>. <ul>        <li><code>dateTime</code>: vrednost <code>datetime</code>, iz katere bo izračunan zapis njenih delov.</li>      </ul>


## Examples

### Example #1 
Pretvorite vrednost &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; v zapis, ki vsebuje vrednosti &#34;Date&#34; in &#34;Time&#34;.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
