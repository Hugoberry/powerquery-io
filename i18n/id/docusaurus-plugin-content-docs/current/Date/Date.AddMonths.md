---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Menambahkan bulan yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Mengembalikan <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> dari penambahan <code>numberOfMonths</code> bulan ke nilai <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang menambahkan bulan.</li>        <li><code>numberOfMonths</code>: Jumlah bulan yang akan ditambahkan.</li>      </ul>


## Examples

### Example #1 
Menambahkan 5 bulan ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Menambahkan 18 bulan ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal dan waktu 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
