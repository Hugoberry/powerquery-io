---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Menghasilkan kemungkinan daftar kunci yang kosong untuk tipe tabel tertentu.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Menghasilkan daftar kunci yang mungkin kosong untuk tipe tabel yang diberikan.<br />    <br />    Setiap kunci ditentukan menggunakan rekaman dalam formulir berikut:    <ul>      <li>        <code>Kolom</code>: daftar nama kolom yang mendefinisikan kunci      </li>      <li>        <code>Utama</code>: <code>true</code> jika kuncinya adalah kunci utama tabel; jika tidak, <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Menghasilkan informasi kunci untuk tipe tabel.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
