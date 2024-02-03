---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Mengembalikan nombor daripada 28 hingga 31 yang menunjukkan bilangan hari dalam bulan.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Mengembalikan bilangan hari dalam bulan dalam nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk yang mana bilangan hari dalam bulan dikembalikan.</li>      </ul>


## Examples

### Example #1 
Bilangan hari dalam bulan Disember seperti yang diwakili oleh &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
