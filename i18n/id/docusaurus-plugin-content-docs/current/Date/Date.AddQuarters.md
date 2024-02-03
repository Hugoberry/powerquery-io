---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Menambahkan kuartal yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Memberikan hasil <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> dari menambahkan <code>numberOfQuarters</code> kuartal ke nilai <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang menambahkan kuartal.</li>      <li><code>numberOfQuarters</code>: Jumlah kuartal yang akan ditambahkan.</li>      </ul>


## Examples

### Example #1 
Menambahkan 1 kuartal ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
