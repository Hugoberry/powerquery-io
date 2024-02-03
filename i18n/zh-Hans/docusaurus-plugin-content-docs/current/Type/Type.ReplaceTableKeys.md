---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

返回所有键均由指定的键列表替换的新的表类型。


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

使用指定的键列表替换所有键，并返回一个新的表类型。<br />    <br />    每个键都使用以下形式的记录进行定义:    <ul>      <li>        <code>Columns</code>: 定义键的列名列表      </li>      <li>        <code>Primary</code>: 如果该键是表的主键，则为 <code>true</code>；否则, <code>false</code>      </li>    </ul>    验证指定的键列表，以确保定义的主键不超过一个，并且表类型中存在所有键列名。    


## Examples

### Example #1 
替换表类型的键信息。
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
清除以前在表类型上定义的键信息。
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
