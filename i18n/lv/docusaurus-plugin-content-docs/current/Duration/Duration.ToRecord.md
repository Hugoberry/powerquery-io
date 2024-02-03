---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Atgriež ierakstu, kurā ir ilguma daļas.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Atgriež ierakstu, kurā ir ilguma vērtības <code>duration</code> daļas.   <ul>        <li><code>duration</code>: <code>duration</code> vērtība, no kuras tiek izveidots ieraksts.</li>      </ul>


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; par tā daļu ierakstu, ietverot dienas, stundas, minūtes un sekundes, ja piemērojams.
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
