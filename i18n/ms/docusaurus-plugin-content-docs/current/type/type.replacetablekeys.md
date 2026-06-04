---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Mengembalikan jadual baru dengan semua kunci digantikan dengan senarai kunci yang ditentukan.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Mengembalikan jadual baharu dengan semua kunci digantikan dengan senarai kunci yang ditentukan.  
  
Setiap kunci ditentukan menggunakan rekod dalam borang berikut:

-   `Lajur`: senarai nama lajur yang menentukan kunci
-   `Utama`: `benar` jika kunci ialah kunci utama jadual; jika tidak, `salah`

Senarai kunci yang ditentukan disahkan untuk memastikan supaya tidak lebih daripada satu kunci utama ditakrifkan dan supaya semua nama lajur kunci wujud pada jenis jadual.


## Examples

### Example #1
Gantikan maklumat kunci pada jenis jadual.
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
Kosongkan maklumat utama yang ditakrifkan sebelum ini pada jenis jadual.
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
