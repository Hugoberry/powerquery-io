---
title: Text.PadStart
---

# Text.PadStart


Mengembalikan teks bagi panjang yang ditentukan dengan menambah ruang di permulaan teks yang ditentukan.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Mengembalikan nilai `text` yang ditambah pada teks `count` dengan memasukkan ruang di permulaan nilai teks `text`. Aksara pilihan `character` boleh digunakan untuk menentukan aksara yang digunakan untuk menambah ruang. Aksara pad lalai ialah ruang.


## Examples

### Example #1
Tambah ruang di permulaan nilai teks agar ia sepanjang 10 aksara.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Tambah ruang di permulaan nilai teks dengan "|" agar ia sepanjang 10 aksara.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
