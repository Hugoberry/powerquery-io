---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Menambahkan pekan yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Memberikan hasil <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> dari menambahkan <code>numberOfWeeks</code> pekan ke nilai <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang menambahkan pekan.</li>      <li><code>numberOfWeeks</code>: Jumlah pekan yang akan ditambahkan.</li>      </ul>


## Examples

### Example #1 
Menambahkan 2 pekan ke nilai &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, atau &lt;code&gt;datetimezone&lt;/code&gt; yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
