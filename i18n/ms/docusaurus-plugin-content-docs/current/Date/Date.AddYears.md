---
title: Date.AddYears
---

# Date.AddYears


## Description

Menambah tahun yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Mengembalikan hasil <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> daripada menambah <code>numberOfYears</code> pada nilai <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> pada yang mana tahun ditambah.</li>        <li><code>numberOfYears</code>: Bilangan tahun untuk ditambah.</li>      </ul>


## Examples

### Example #1 
Tambah 4 tahun pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Tambah 10 tahun pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh dan masa 5/14/2011 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
