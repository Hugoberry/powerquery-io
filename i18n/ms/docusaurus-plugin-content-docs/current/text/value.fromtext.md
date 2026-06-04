---
title: Value.FromText
---

# Value.FromText


Mencipta nilai ditaip kukuh daripada perwakilan teks.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Menyahkodkan nilai daripada perwakilan teks dan mentafsirkannya sebagai nilai dengan jenis yang sesuai.

-   `text`: Teks untuik ditafsirkan.
-   `culture`:(Pilihan) Budaya khusus yang digunakan untuk mentafsir teks (contohnya, "en-US").

Fungsi ini mengambil nilai teks dan mengembalikan nilai jenis `nombor`, `logik`, `nol`, `tarikhmasa`, `tempoh`, atau `teks`. Nilai teks kosong ditafsirkan sebagai nilai `nol`.


## Examples

### Example #1
Menukar teks yang mewakili nombor kepada nilai nombornya yang sepadan.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Menukar teks yang mewakili peratusan kepada nilai nombornya yang sepadan.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Menukar teks yang mewakili nilai Euro Perancis kepada nilai nombornya yang sepadan.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Menukar teks yang mewakili tarikh dan masa Jerman kepada nilai tarikh dan masanya yang sepadan.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
