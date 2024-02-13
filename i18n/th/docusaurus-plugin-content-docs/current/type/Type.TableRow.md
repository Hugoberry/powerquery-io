---
title: Type.TableRow
---

# Type.TableRow


ส่งกลับชนิดแถวของชนิดตาราง


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

ส่งกลับชนิดแถวของชนิดตารางที่ระบุ ผลลัพธ์จะเป็นชนิดระเบียนเสมอ


## Examples

### Example #1 
ส่งกลับข้อมูลชนิดแถวสําหรับตารางอย่างง่าย
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
