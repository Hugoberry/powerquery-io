---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Mengembalikan nombor daripada 1 hingga 6 yang menunjukkan tarikh ini jatuh pada minggu yang mana dalam bulan.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Mengembalikan nombor daripada 1 hingga 6 yang menunjukkan tarikh `dateTime` jatuh pada minggu yang mana dalam bulan.

-   `dateTime`: Nilai `datetime` untuk yang mana minggu dalam bulan ditentukan.


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
