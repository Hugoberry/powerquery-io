---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Menghasilkan tipe tabel baru dengan semua kunci tergantikan oleh daftar kunci yang ditentukan.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Menghasilkan tipe tabel baru dengan semua kunci diganti dengan daftar kunci yang ditentukan.<br />    <br />    Setiap kunci ditentukan menggunakan rekaman dalam formulir berikut:    <ul>      <li>        <code>Kolom</code>: daftar nama kolom yang mendefinisikan kunci      </li>      <li>        <code>Utama</code>: <code>true</code> jika kuncinya adalah kunci utama tabel; jika tidak, <code>false</code>      </li>    </ul>    Daftar kunci yang ditentukan divalidasi untuk memastikan bahwa tidak lebih dari satu kunci utama ditentukan dan semua nama kolom kunci ada pada tipe tabel.    


## Examples

### Example #1 
Ganti informasi kunci pada tipe tabel.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
Hapus informasi kunci yang sebelumnya ditentukan pada tipe tabel.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
