---
title: Text.Split
---

# Text.Split


Memisahkan teks menjadi senarai nilai teks berdasarkan pemisah yang ditentukan.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Mengembalikan senarai nilai teks yang terhasil daripada memisahkan nilai teks berdasarkan pemisah yang ditentukan.

-   `text`: Nilai teks untuk berpisah.
-   `separator`: Pemisah yang digunakan untuk memisahkan teks. Pemisah boleh sama ada aksara tunggal atau jujukan aksara. Jika jujukan aksara digunakan, teks hanya dipisahkan pada tika tempat jujukan yang tepat berlaku.


## Examples

### Example #1
Cipta senarai daripada nilai teks terbatas "|" "Name|Address|PhoneNumber".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Cipta senarai daripada nilai teks menggunakan jujukan aksara.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
