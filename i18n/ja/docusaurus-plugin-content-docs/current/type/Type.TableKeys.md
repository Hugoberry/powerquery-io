---
title: Type.TableKeys
---

# Type.TableKeys


指定されたテーブル型のキーの一覧を返します。この一覧は空である可能性があります。


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

指定されたテーブル型のキーの一覧を返します。この一覧は空である可能性があります。<br />    <br />    各キーは、次の形式のレコードを使用して定義されます。    <ul>      <li>        <code>Columns</code>: キーを定義する列名の一覧      </li>      <li>        <code>Primary</code>: キーがテーブルのプライマリ キーの場合は <code>true</code>、それ以外の場合は <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
テーブル型のキー情報を返します。
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
