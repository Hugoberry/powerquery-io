---
title: Type.RecordFields
---

# Type.RecordFields


## Description

レコード型のフィールドを表すレコードを返します。返されるレコード型の各フィールドには、対応する名前と値が含まれます。


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

レコード <code>type</code> のフィールドを表すレコードを返します。返されるレコード型の各フィールドには、対応する名前と値が <code>[ Type = type, Optional = logical ]</code> というレコードの形で含まれます。


## Examples

### Example #1 
レコードの名前と値 (&lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;) を検索します。
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
