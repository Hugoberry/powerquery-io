---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Menambah bulan yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Mengembalikan hasil <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> daripada menambah <code>numberOfMonths</code> bulan pada nilai <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> pada yang mana bulan ditambah.</li>        <li><code>numberOfMonths</code>: Bilangan bulan untuk ditambah.</li>      </ul>


## Examples

### Example #1 
Tambah 5 bulan pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Tambah 18 bulan pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh dan masa 5/14/2011 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
