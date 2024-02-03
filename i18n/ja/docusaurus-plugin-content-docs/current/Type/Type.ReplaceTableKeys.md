---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

すべてのキーが指定された一連のキーに置き換えられた新しいテーブル型を返します。


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

すべてのキーが指定された一連のキーに置き換えられた新しいテーブル型を返します。<br />    <br />    各キーは、次の形式のレコードを使用して定義されます。    <ul>      <li>        <code>Columns</code>: キーを定義する列名の一覧      </li>      <li>        <code>Primary</code>: キーがテーブルのプライマリ キーの場合は <code>true</code>、それ以外の場合は <code>false</code>    </li>      </ul>    指定されたキーの一覧は、プライマリ キーが 1 つ以上定義されておらず、すべてのキー列名がテーブル型に存在することを確認するために検証されます。    


## Examples

### Example #1 
テーブル型のキー情報を置き換えます。
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
テーブル型で以前に定義されたキー情報をクリアします。
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
