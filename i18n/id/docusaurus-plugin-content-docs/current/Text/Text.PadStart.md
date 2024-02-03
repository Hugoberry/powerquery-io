---
title: Text.PadStart
---

# Text.PadStart


## Description

Menghasilkan teks dengan panjang yang ditetapkan melalui padding awal teks tertentu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Menghasilkan nilai <code>text</code> yang ditambahkan ke panjang <code>count</code> dengan menyisipkan spasi di awal nilai teks <code>text</code>.    Karakter opsional <code>character</code> dapat digunakan untuk menentukan karakter yang digunakan untuk penambahan. Karakter tambahan default adalah spasi.


## Examples

### Example #1 
Mem-pad awal nilai teks agar panjangnya mencapai 10 karakter.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Mem-pad awal nilai teks dengan &#34;|&#34; agar panjangnya mencapai 10 karakter.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
