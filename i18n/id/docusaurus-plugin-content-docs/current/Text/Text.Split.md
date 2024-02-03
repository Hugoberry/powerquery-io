---
title: Text.Split
---

# Text.Split


## Description

Membagi teks menjadi daftar nilai teks berdasarkan pembatas yang ditetapkan.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Memberikan daftar nilai teks yang dihasilkan dari membagi nilai teks <code>text</code> berdasarkan pembatas yang ditetapkan, <code>separator</code>.


## Examples

### Example #1 
Membuat daftar dari &#34;|&#34; nilai teks terbatas &#34;Name|Address|PhoneNumber&#34;.
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
