---
title: Type.TableKeys
---

# Type.TableKeys


Mengembalikan kemungkinan senarai kunci kosong untuk jenis jadual yang ditentukan.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Mengembalikan kemungkinan senarai kunci yang kosong untuk jenis jadual yang diberikan.  
  
Setiap kunci ditentukan menggunakan rekod dalam borang berikut:

-   `Lajur`: senarai nama lajur yang menentukan kunci
-   `Utama`: `benar` jika kunci ialah kunci utama jadual; jika tidak, `salah`


## Examples

### Example #1
Kembalikan maklumat kunci untuk jenis jadual.
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
