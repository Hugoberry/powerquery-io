---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Mengembalikan rekod yang mengandungi sebahagian tempoh.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Mengembalikan rekod yang mengandungi sebahagian nilai tempoh, <code>duration</code>.  <ul>        <li><code>duration</code>: <code>duration</code> daripada yang mana rekod dicipta.</li>      </ul>


## Examples

### Example #1 
Menukar &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; menjadi rekod bahagiannya termasuk hari, jam, minit dan saat jika berkenaan.
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
