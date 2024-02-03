---
title: Type.TableRow
---

# Type.TableRow


## Description

Menampilkan tipe baris dari tipe tabel.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Menampilkan tipe baris dari tipe tabel yang ditentukan. Hasil akan selalu berupa tipe catatan.


## Examples

### Example #1 
Menampilkan informasi jenis baris untuk tabel sederhana.
```powerquery
let
    tableRowType = Type.TableRow(Value.Type(#table({"Column1"}, {})))
in
    Type.RecordFields(tableRowType)
```

Result: 
```powerquery
[Column1 = [Type = type any, Optional = false]]
```




## Category
Type
