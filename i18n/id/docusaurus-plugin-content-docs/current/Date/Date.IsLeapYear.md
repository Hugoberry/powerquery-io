---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Menunjukkan apakah tanggal ini jatuh pada tahun kabisat.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Menunjukkan apakah nilai tanggalwaktu tertentu <code>dateTime</code> jatuh pada tahun kabisat. <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah tahun 2012, seperti ditunjukkan oleh &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, adalah tahun kabisat.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
