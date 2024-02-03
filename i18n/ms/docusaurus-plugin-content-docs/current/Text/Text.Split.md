---
title: Text.Split
---

# Text.Split


## Description

Memisahkan teks menjadi senarai nilai teks berdasarkan pemisah yang ditentukan.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Mengembalikan senarai nilai teks yang terhasil daripada memisahkan nilai teks <code>text</code> berdasarkan pemisah yang ditentukan, <code>separator</code>.


## Examples

### Example #1 
Cipta senarai daripada nilai teks terbatas &#34;|&#34; &#34;Name|Address|PhoneNumber&#34;.
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




## Category
Text.Transformations
