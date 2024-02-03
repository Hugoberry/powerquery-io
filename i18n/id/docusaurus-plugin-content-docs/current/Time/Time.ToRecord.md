---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Menghasilkan data berisi bagian nilai Waktu.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Mengembalikan data berisi bagian nilai Waktu tertentu, <code>time</code>. <ul>        <li><code>time</code>: Nilai <code>time</code> yang data pada bagiannya akan dihitung.</li>      </ul>


## Examples

### Example #1 
Mengkonversi nilai &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; ke data berisi nilai Waktu.
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
