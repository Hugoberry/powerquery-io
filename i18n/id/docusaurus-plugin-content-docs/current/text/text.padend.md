---
title: Text.PadEnd
---

# Text.PadEnd


Menghasilkan teks dengan panjang yang ditetapkan melalui padding akhir teks tertentu.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Mengembalikan nilai `text` yang ditambahkan ke panjang `count` dengan menyisipkan spasi di akhir nilai teks `text`. Karakter opsional `character` dapat digunakan untuk menentukan karakter yang digunakan untuk penambahan. Karakter tambahan default adalah spasi.


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
Mem-pad akhir nilai teks dengan "|" agar panjangnya mencapai 10 karakter.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
