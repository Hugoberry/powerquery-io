---
title: Json.FromValue
---

# Json.FromValue


Menghasilakan penampilan JSON bagi nilai yang ditentukan.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Menghasilkan penampilan JSON bagi nilai yang ditentukan `value` dengan pengekodan teks yang ditentukan oleh `encoding`. Jika `encoding` dikeluarkan, UTF8 akan digunakan. Nilai ditunjukkan seperti yang berikut:

-   Nilai nol, teks dan logik ditunjukkan sebegai jenis JSON yang sepadan
-   Nombor yang ditunjukkan sebagai nombor dalam JSON, kecuali `#infinity`, `-#infinity` dan `#nan` ditukarkan ke nol
-   Senarai adalah ditunjukkan sebagai tatasusunan JSON
-   Rekod diwakili sebagai objek JSON
-   Jadual adalah ditunjukkan sebagai tatasusunan objek
-   Tarikh, masa, tarikh masa, zon tarikh masa dan tempoh diwakili sebagai teks ISO-8601
-   Nilai perduaan adalah ditunjukkan sebagai teks dikodkan asas 64
-   Jenis dan fungsi menghasilkan ralat


## Examples

### Example #1
Menukar nilai kompleks ke JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
