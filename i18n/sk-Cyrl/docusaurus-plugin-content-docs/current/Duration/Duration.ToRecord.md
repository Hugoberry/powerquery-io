---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Vráti záznam obsahujúci časti trvania.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Vráti záznam obsahujúci časti hodnoty duration <code>duration</code>.  <ul>        <li><code>duration</code>: Hodnota <code>duration</code>, z ktorej sa vytvorí záznam.</li>      </ul>


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; na záznam z príslušných častí vrátane dní, hodín, minút a sekúnd (ak je to možné).
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
