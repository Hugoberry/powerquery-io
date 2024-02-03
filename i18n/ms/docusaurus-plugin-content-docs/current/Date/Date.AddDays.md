---
title: Date.AddDays
---

# Date.AddDays


## Description

Menambah hari yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Mengembalikan hasil <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> daripada menambah <code>numberOfDays</code> hari pada nilai <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> pada yang mana hari ditambah.</li>      <li><code>numberOfDays</code>: Bilangan hari untuk ditambah.</li>      </ul>


## Examples

### Example #1 
Tambah 5 hari pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
