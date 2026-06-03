---
title: Type.RecordFields
---

# Type.RecordFields


レコード型のフィールドを表すレコードを返します。返されるレコード型の各フィールドには、対応する名前と値が含まれます。


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

レコード `type` のフィールドを表すレコードを返します。返されるレコード型の各フィールドには、対応する名前と値が `[ Type = type, Optional = logical ]` というレコードの形で含まれます。


## Examples

### Example #1
レコードの名前と値 (`[ A = number, optional B = any]`) を検索します。
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
