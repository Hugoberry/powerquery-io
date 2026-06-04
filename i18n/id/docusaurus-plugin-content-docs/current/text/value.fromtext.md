---
title: Value.FromText
---

# Value.FromText


Membuat nilai bertipe kuat dari representasi tekstual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Mendekodekan nilai dari representasi tekstual dan menginterpretasikannya sebagai nilai dengan tipe yang sesuai.

-   `text`: Teks yang akan diinterpretasikan.
-   `culture`: (Opsional) Kultur tertentu yang digunakan untuk menginterpretasikan teks (misalnya, "en-US").

Fungsi ini mengambil nilai teks dan memberikan nilai dengan tipe `angka`, `logika`, `null`, `datetime`, `durasi`, atau `teks`. Nilai teks kosong diinterpretasikan sebagai nilai `null`.


## Examples

### Example #1
Konversikan teks yang menunjukkan angka ke nilai angka yang sesuai.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konversikan teks yang menunjukkan persentase ke nilai angka yang sesuai.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konversikan teks yang menunjukkan nilai Euro Prancis ke nilai angka yang sesuai.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konversikan teks yang menunjukkan tanggal dan waktu Jerman ke nilai tanggal dan waktu yang sesuai.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
