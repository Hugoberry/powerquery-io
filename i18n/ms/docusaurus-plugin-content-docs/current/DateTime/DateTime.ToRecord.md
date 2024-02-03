---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Mengembalikan rekod yang mengandungi bahagian nilai datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Mengembalikan rekod yang mengandungi sebahagian nilai datetime yang ditentukan, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Nilai <code>datetime</code> untuk yang mana rekod bahagiannya akan dikira.</li>      </ul>


## Examples

### Example #1 
Tukarkan nilai &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; kepada rekod yang mengandungi nilai Tarikh dan Masa.
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
