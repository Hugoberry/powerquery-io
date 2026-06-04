---
title: Type.TableKeys
---

# Type.TableKeys


Menghasilkan kemungkinan daftar kunci yang kosong untuk tipe tabel tertentu.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Menghasilkan daftar kunci yang mungkin kosong untuk tipe tabel yang diberikan.  
  
Setiap kunci ditentukan menggunakan rekaman dalam formulir berikut:

-   `Kolom`: daftar nama kolom yang mendefinisikan kunci
-   `Utama`: `true` jika kuncinya adalah kunci utama tabel; jika tidak, `false`


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
