---
title: Type.TableRow
---

# Type.TableRow


## Description

Mengembalikan jenis baris bagi jenis jadual.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Mengembalikan jenis baris bagi jenis jadual yang ditentukan. Hasilnya sentiasa jenis rekod.


## Examples

### Example #1 
Kembalikan maklumat jenis baris untuk jadual mudah.
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
