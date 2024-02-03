---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Menghasilkan angka mulai dari 28 hingga 31 yang menunjukkan angka hari dalam sebulan.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Mengembalikan jumlah hari dalam sebulan pada nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang menghasilkan jumlah hari dalam sebulan.</li>      </ul>


## Examples

### Example #1 
Jumlah hari pada bulan Desember seperti ditunjukkan &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
