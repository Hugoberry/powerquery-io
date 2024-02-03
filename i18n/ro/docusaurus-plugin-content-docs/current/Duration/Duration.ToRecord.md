---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Returnează o înregistrare ce conţine părţile duratei.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Returnează o înregistrare care conține părți din valoarea durată, <code>duration</code>.  <ul>        <li><code>duration</code>: o valoare <code>duration</code> de la care este creată înregistrarea.</li>      </ul>


## Examples

### Example #1 
Convertiţi &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; într-o înregistrare a părţilor, inclusiv zile, ore, minute şi secunde dacă există.
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
