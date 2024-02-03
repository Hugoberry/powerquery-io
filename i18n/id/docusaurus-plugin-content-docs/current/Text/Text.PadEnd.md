---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Menghasilkan teks dengan panjang yang ditetapkan melalui padding akhir teks tertentu.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Mengembalikan nilai <code>text</code> yang ditambahkan ke panjang <code>count</code> dengan menyisipkan spasi di akhir nilai teks <code>text</code>.    Karakter opsional <code>character</code> dapat digunakan untuk menentukan karakter yang digunakan untuk penambahan. Karakter tambahan default adalah spasi.


## Examples

### Example #1 
Mem-pad akhir nilai teks agar panjangnya mencapai 10 karakter.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Mem-pad akhir nilai teks dengan &#34;|&#34; agar panjangnya mencapai 10 karakter.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
