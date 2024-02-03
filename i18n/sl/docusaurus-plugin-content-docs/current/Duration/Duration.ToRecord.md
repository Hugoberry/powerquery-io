---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Vrne zapis, ki vsebuje dele trajanja.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Vrne zapis, ki vsebuje dele vrednosti trajanja, <code>duration</code>.   <ul>        <li><code>duration</code>: vrednost <code>duration</code>, iz katere se ustvari zapis.</li>      </ul>


## Examples

### Example #1 
Pretvorite &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; v zapis delov, vključno z dnevi, urami, minutami in sekundami, če je ustrezno.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
