---
title: Text.Split
---

# Text.Split


Membagi teks menjadi daftar nilai teks berdasarkan pembatas yang ditetapkan.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Menghasilkan daftar nilai teks yang dihasilkan dari pemisahan nilai teks berdasarkan pemisah yang ditentukan.

-   `text`: Nilai teks yang akan dipisahkan.
-   `separator`: Pemisah yang digunakan untuk memisahkan teks. Pemisah dapat berupa karakter tunggal atau urutan karakter. Jika urutan karakter digunakan, teks hanya dipisahkan pada instans tempat urutan yang tepat terjadi.


## Examples

### Example #1
Membuat daftar dari "|" nilai teks terbatas "Name|Address|PhoneNumber".
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
Buat daftar dari nilai teks menggunakan urutan karakter.
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
