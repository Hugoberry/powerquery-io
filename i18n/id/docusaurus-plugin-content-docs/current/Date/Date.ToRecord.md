---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Menghasilkan data berisi bagian dari nilai tanggal.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Mengembalikan data berisi bagian dari nilai tanggal tertentu, <code>date</code>. <ul>        <li><code>date</code>: Nilai <code>date</code> yang data pada bagiannya akan dihitung.</li>      </ul>


## Examples

### Example #1 
Mengkonversi nilai &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; ke data berisi bagian dari nilai tanggal.
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
