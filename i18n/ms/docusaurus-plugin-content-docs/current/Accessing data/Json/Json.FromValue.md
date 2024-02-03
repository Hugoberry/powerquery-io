---
title: Json.FromValue
---

# Json.FromValue


## Description

Menghasilakan penampilan JSON bagi nilai yang ditentukan.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Menghasilkan penampilan JSON bagi nilai yang ditentukan <code>value</code> dengan pengekodan teks yang ditentukan oleh <code>encoding</code>. Jika <code>encoding</code> dikeluarkan, UTF8 akan digunakan. Nilai ditunjukkan seperti yang berikut:<br /> <ul>        <li>Nilai nol, teks dan logik ditunjukkan sebegai jenis JSON yang sepadan</li>        <li>Nombor yang ditunjukkan sebagai nombor dalam JSON, kecuali <code>#infinity</code>, <code>-#infinity</code> dan <code>#nan</code> ditukarkan ke nol</li>        <li>Senarai adalah ditunjukkan sebagai tatasusunan JSON</li>        <li>Rekod adalah ditunjukkan sebagai objek JSON</li>        <li>Jadual adalah ditunjukkan sebagai tatasusunan objek</li>        <li>Tarikh, masa, tarikh masa, zon tarikh masa dan tempoh adalah ditunjukkan sebagai teks ISO-8601</li>        <li>Nilai perduaan adalah ditunjukkan sebagai teks dikodkan asas 64</li>        <li>Jenis dan fungsi menghasilkan ralat</li> </ul>    


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
