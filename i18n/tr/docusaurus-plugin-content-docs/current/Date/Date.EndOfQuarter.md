---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Çeyrek sonunu döndürür.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> içeren çeyrek sonunu döndürür. Saat dilimi bilgileri korunur.      <ul>      <li><code>dateTime</code>: Kendisinden itibaren çeyreğin sonunun hesaplandığı <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
10 Ekim 2011, 08:00 için çeyrek sonunu bulun.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
