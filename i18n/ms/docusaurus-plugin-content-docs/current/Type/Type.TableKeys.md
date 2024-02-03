---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Mengembalikan kemungkinan senarai kunci kosong untuk jenis jadual yang ditentukan.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Mengembalikan kemungkinan senarai kunci yang kosong untuk jenis jadual yang diberikan.<br />    <br />    Setiap kunci ditentukan menggunakan rekod dalam borang berikut:    <ul>      <li>        <code>Lajur</code>: senarai nama lajur yang menentukan kunci      </li>      <li>        <code>Utama</code>: <code>benar</code> jika kunci ialah kunci utama jadual; jika tidak, <code>salah</code>      </li>    </ul>    


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
