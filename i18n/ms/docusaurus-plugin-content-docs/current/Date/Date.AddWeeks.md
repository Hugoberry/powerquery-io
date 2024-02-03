---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Menambah minggu yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Mengembalikan hasil <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> daripada menambah <code>numberOfWeeks</code> minggu pada nilai <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> pada yang mana minggu ditambah.</li>      <li><code>numberOfWeeks</code>: Bilangan minggu untuk ditambah.</li>      </ul>


## Examples

### Example #1 
Tambah 2 minggu pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
