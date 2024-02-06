---
title: Type.TableRow
---

# Type.TableRow


返回表类型的行类型。


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

返回指定表类型的行类型。结果将始终为记录类型。


## Examples

### Example #1 
返回简单表的行类型信息。
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
