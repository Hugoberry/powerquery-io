---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Vrne zapis, ki vsebuje dele vrednosti &#34;Time&#34;.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Vrne zapis, ki vsebuje dele dane vrednosti "Time", <code>time</code>. <ul>        <li><code>time</code>: vrednost <code>time</code>, iz katere bo izračunan zapis njenih delov.</li>      </ul>


## Examples

### Example #1 
Pretvorite vrednost &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; v zapis, ki vsebuje vrednosti &#34;Time&#34;.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
