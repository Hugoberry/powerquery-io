---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Menghasilkan data berisi bagian dari durasi.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Mengembalikan data berisi bagian dari nilai durasi, <code>duration</code>.  <ul>        <li><code>duration</code>: <code>duration</code> yang digunakan untuk menghasilkan data.</li>      </ul>


## Examples

### Example #1 
Mengkonversi &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; ke data bagiannya, termasuk hari, jam, menit, dan detik jika tersedia.
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
