---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Menambah suku yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Mengembalikan hasil <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> daripada menambah <code>numberOfQuarters</code> suku pada nilai <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> pada yang mana suku ditambah.</li>      <li><code>numberOfQuarters</code>: Bilangan suku untuk ditambah.</li>      </ul>


## Examples

### Example #1 
Tambah 1 suku pada nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
