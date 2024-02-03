---
title: Date.Day
---

# Date.Day


## Description

Menghasilkan komponen hari.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen hari pada nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan mengekstrak komponen hari.</li>      </ul>


## Examples

### Example #1 
Mengambil komponen hari dari nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal dan waktu 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
