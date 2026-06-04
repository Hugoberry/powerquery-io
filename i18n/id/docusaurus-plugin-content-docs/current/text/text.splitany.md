---
title: Text.SplitAny
---

# Text.SplitAny


Menghasilkan daftar nilai teks yang terbagi di salah satu karakter pada pembatas.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Menghasilkan daftar nilai teks yang dihasilkan dari pemisahan nilai teks berdasarkan karakter apa pun yang ditentukan dalam pemisah.

-   `text`: Nilai teks yang akan dipisahkan.
-   `separators`: Karakter pemisah yang digunakan untuk memisahkan teks.


## Examples

### Example #1
Buat daftar dari teks tertentu menggunakan karakter pemisah yang ditentukan.
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
