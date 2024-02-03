---
title: Date.Day
---

# Date.Day


## Description

Mengembalikan hari komponen.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen hari bagi nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> daripada yang mana komponen hari diekstrak.</li>      </ul>


## Examples

### Example #1 
Dapatkan komponen hari bagi &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; atau &lt;code&gt;datetimezone&lt;/code&gt; mewakili tarikh dan masa 5/14/2011 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
