---
title: Date.AddYears
---

# Date.AddYears


## Description

Menambahkan tahun yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Mengembalikan hasil <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> dari penambahan <code>numberOfYears</code> ke nilai <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang menambahkan tahun.</li>        <li><code>numberOfYears</code>: Jumlah tahun yang akan ditambahkan.</li>      </ul>


## Examples

### Example #1 
Menambahkan 4 tahun ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Menambahkan 10 tahun ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal dan waktu 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
