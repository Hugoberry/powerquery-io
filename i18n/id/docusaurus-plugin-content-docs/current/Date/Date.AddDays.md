---
title: Date.AddDays
---

# Date.AddDays


## Description

Menambahkan hari yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Memberikan hasil <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> dari menambahkan <code>numberOfDays</code> hari ke nilai <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang menambahkan hari.</li>      <li><code>numberOfDays</code>: Jumlah hari yang akan ditambahkan.</li>      </ul>


## Examples

### Example #1 
Menambahkan 5 hari ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
