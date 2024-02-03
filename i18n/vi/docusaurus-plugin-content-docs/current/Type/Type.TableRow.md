---
title: Type.TableRow
---

# Type.TableRow


## Description

Trả về loại hàng của loại bảng.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Trả về loại hàng của loại bảng đã chỉ định. Kết quả sẽ luôn là một loại bản ghi.


## Examples

### Example #1 
Trả về thông tin loại hàng cho bảng đơn giản.
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
