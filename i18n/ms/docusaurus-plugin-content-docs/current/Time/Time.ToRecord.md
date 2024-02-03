---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Mengembalikan rekod yang mengandungi bahagian nilai Masa.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Mengembalikan rekod yang mengandungi sebahagian nilai Masa yang ditentukan, <code>time</code>. <ul>        <li><code>time</code>: Nilai <code>time</code> untuk yang mana rekod bahagiannya akan dikira.</li>      </ul>


## Examples

### Example #1 
Tukarkan nilai &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; kepada rekod yang mengandungi nilai Masa.
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
