---
title: Number.From
---

# Number.From


Mencipta nombor daripada nilai yang ditentukan.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `nombor` daripada `value` yang ditentukan. `culture` pilihan juga mungkin diberikan (sebagai contoh, "en-US"). Jika `value` yang ditentukan adalah `nol`, `Number.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `nombor`, `value` dikembalikan. Nilai bagi jenis yang berikut boleh ditukarkan kepada nilai `number`:

-   `teks`: Nilai `nombor` daripada perwakilan teks. Format teks lazim dikendalikan ("15", "3,423.10", "5.0E-10"). Rujuk `Number.FromText` untuk butiran.
-   `logik`: 1 untuk `benar`, 0 untuk `salah`.
-   `tarikhmasa`: Nombor titik apungan kepersisan berganda yang mengandungi tarikh Automasi OLE yang setara.
-   `datetimezone`: Nombor titik apungan kepersisan berganda yang mengandungi tarikh Automasi OLE yang setara bagi tarikh dan masa tempatan `value`.
-   `date`: Nombor titik apungan kepersisan berganda yang mengandungi tarikh Automasi OLE yang setara.
-   `masa`: Dinyatakan dalam hari pecahan.
-   `tempoh`: Dinyatakan dalam hari secara keseluruhan atau pecahan.

Jika `value` ialah mana-mana jenis yang lain, ralat dikembalikan.


## Examples

### Example #1
Dapatkan nilai `number` bagi `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai `number` bagi `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Dapatkan nilai `number` sebanyak `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
