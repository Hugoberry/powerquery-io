---
title: Type.TableKeys
---

# Type.TableKeys


返回给定表类型的可能为空的键列表。


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

返回给定表类型的键可能为空的列表。  
  
每个键都是使用以下格式的记录定义的:

-   `Columns`: 定义主键的列名列表
-   `Primary`: 如果键是表的主键，则 `true`；否则，`false`


## Examples

### Example #1
返回表类型的键信息。
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
