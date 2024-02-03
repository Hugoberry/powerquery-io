---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Mengembalikan nombor daripada 1 hingga 6 yang menunjukkan tarikh ini jatuh pada minggu yang mana dalam bulan.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Mengembalikan nombor daripada 1 hingga 6 yang menunjukkan tarikh <code>dateTime</code> jatuh pada minggu yang mana dalam bulan. <ul>        <li><code>dateTime</code>: Nilai <code>datetime</code> untuk yang mana minggu dalam bulan ditentukan.</li>      </ul>


## Examples

### Example #1 
Tentukan 15 Mac jatuh pada minggu yang mana dalam 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
