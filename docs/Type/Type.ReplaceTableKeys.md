---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Returns a new table type with all keys replaced by the specified list of keys.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Returns a new table type with all keys replaced by the specified list of keys.<br />    <br />    Each key is defined using a record in the following form:    <ul>      <li>        <code>Columns</code>: a list of the column names that define the key      </li>      <li>        <code>Primary</code>: <code>true</code> if the key is the table's primary key; otherwise, <code>false</code>      </li>    </ul>    The specified list of keys is validated to ensure that no more than one primary key is defined and that all key column names exist on the table type.    


## Examples

### Example #1 
Replace the key information on a table type.
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
Clear the key information previously defined on a table type.
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
