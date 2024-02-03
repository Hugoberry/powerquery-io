---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Mengembalikan teks bagi panjang yang ditentukan dengan menambah ruang di hujung teks yang ditentukan.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Mengembalikan nilai <code>text</code> yang ditambah pada teks <code>count</code> dengan memasukkan ruang di hujung nilai teks <code>text</code>.     Aksara pilihan <code>character</code> boleh digunakan untuk menentukan aksara yang digunakan untuk menambah ruang. Aksara pad lalai ialah ruang.


## Examples

### Example #1 
Tambah ruang di hujung nilai teks agar ia sepanjang 10 aksara.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Tambah ruang di hujung nilai teks dengan &#34;|&#34; agar ia sepanjang 10 aksara.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
