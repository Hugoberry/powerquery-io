---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Mengembalikan rekod yang mengandungi sebahagian nilai tarikh.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Mengembalikan rekod yang mengandungi sebahagian nilai tarikh yang ditentukan, <code>date</code>. <ul>        <li><code>date</code>: Nilai <code>date</code> untuk yang mana rekod bahagiannya akan dikira.</li>      </ul>


## Examples

### Example #1 
Tukarkan nilai &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; kepada rekod yang mengandungi sebahagian daripada nilai tarikh.
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
