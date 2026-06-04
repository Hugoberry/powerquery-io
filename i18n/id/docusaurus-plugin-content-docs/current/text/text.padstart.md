---
title: Text.PadStart
---

# Text.PadStart


Menghasilkan teks dengan panjang yang ditetapkan melalui padding awal teks tertentu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Menghasilkan nilai `text` yang ditambahkan ke panjang `count` dengan menyisipkan spasi di awal nilai teks `text`. Karakter opsional `character` dapat digunakan untuk menentukan karakter yang digunakan untuk penambahan. Karakter tambahan default adalah spasi.


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
Mem-pad awal nilai teks dengan "|" agar panjangnya mencapai 10 karakter.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
