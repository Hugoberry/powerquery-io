---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Menunjukkan sama ada tarikh ini jatuh dalam tahun lompat.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai datetime yang ditentukan bagi `dateTime` ialah tahun lompat.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk dinilaikan.


## Examples

### Example #1
Tentukan sama ada tahun 2012, seperti yang diwakili oleh `#date(2012, 01, 01)` ialah tahun lompat.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
