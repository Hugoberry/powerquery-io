---
title: Type.TableRow
---

# Type.TableRow


## Description

テーブル タイプの列のタイプを返します。


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

指定されたテーブル タイプの行のタイプを返します。結果は常にレコード タイプです。


## Examples

### Example #1 
単純なテーブルの行のタイプの詳細情報を返します。
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
