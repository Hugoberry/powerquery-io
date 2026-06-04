---
title: Text.PadEnd
---

# Text.PadEnd


Mengembalikan teks bagi panjang yang ditentukan dengan menambah ruang di hujung teks yang ditentukan.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Mengembalikan nilai `text` yang ditambah pada teks `count` dengan memasukkan ruang di hujung nilai teks `text`. Aksara pilihan `character` boleh digunakan untuk menentukan aksara yang digunakan untuk menambah ruang. Aksara pad lalai ialah ruang.


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
Tambah ruang di hujung nilai teks dengan "|" agar ia sepanjang 10 aksara.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
