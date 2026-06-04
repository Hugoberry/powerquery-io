---
title: Type.TableKeys
---

# Type.TableKeys


針對指定的資料表類型傳回可能空白的索引鍵清單。


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

傳回指定資料表類型的索引鍵清單可能為空白。  
  
每個索引鍵都是使用下列格式的記錄來定義:

-   `Columns`: 定義索引鍵的資料行名稱清單
-   `Primary`: 如果索引鍵是資料表的主索引鍵，則為 `true`; 否則為 `false`


## Examples

### Example #1
傳回資料表類型的索引鍵資訊。
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
