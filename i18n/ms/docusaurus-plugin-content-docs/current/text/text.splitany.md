---
title: Text.SplitAny
---

# Text.SplitAny


Mengembalikan senarai nilai teks, dipisahkan pada sebarang aksara dalam pemisah.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Mengembalikan senarai nilai teks yang terhasil daripada pemisahan nilai teks berdasarkan sebarang aksara yang ditentukan dalam pemisah.

-   `text`: Nilai teks untuk berpisah.
-   `separators`: Aksara pemisah yang digunakan untuk memisahkan text.


## Examples

### Example #1
Cipta senarai daripada teks yang ditentukan menggunakan aksara pemisah yang ditentukan.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
