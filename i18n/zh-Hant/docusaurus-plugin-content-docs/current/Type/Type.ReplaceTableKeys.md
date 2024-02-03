---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

傳回新的資料表類型，並以指定的索引鍵清單取代所有所有索引鍵。


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

傳回以指定的索引鍵清單取代所有索引鍵的新資料表類型。<br />    <br />    每個索引鍵都是使用下列格式的記錄來定義:    <ul>      <li>        <code>Columns</code>: 定義索引鍵的資料行名稱清單      </li>      <li>        <code>Primary</code>: 如果索引鍵是資料表的主索引鍵，則為 <code>true</code>; 否則為 <code>false</code>      </li>    </ul>    指定的索引鍵清單會經過驗證，以確保只定義一個主索引鍵，而且資料表類型有所有索引鍵資料行名稱。    


## Examples

### Example #1 
取代資料表類型的索引鍵資訊。
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
清除先前為資料表類型定義的索引鍵資訊。
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
