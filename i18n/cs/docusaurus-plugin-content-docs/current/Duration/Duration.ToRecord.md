---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Vrátí záznam obsahující části hodnoty duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Vrátí záznam obsahující části hodnoty duration <code>duration</code>.  <ul>        <li><code>duration</code>: Hodnota <code>duration</code>, ze které je vytvořen záznam.</li>      </ul>


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; na záznam obsahující její části včetně dnů, hodin, minut a sekund (pokud je to možné).
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
