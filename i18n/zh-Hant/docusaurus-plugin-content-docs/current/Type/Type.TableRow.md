---
title: Type.TableRow
---

# Type.TableRow


## Description

傳回資料表類型的資料列類型。


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

傳回指定資料表類型的資料列類型。結果永遠會是記錄類型。


## Examples

### Example #1 
傳回簡單資料表的資料列類型資訊。
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
