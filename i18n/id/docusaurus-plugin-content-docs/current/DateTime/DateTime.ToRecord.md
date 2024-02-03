---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Menghasilkan data berisi bagian nilai datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Mengembalikan data berisi bagian dari nilai datetime tertentu, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Nilai <code>datetime</code> yang data pada bagiannya akan dihitung.</li>      </ul>


## Examples

### Example #1 
Mengkonversi nilai &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; ke data berisi nilai Tanggal dan Waktu.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
