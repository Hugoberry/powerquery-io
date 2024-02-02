---
title: Table.FromList
---

# Table.FromList


## Description

Converts a list into a table by applying the specified splitting function to each item in the list.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Details

Converts a list, <code>list</code> into a table by applying the optional splitting function, <code>splitter</code>, to each item in the list. By default, the list is assumed to be a list of text values that is split by commas. Optional <code>columns</code> may be the number of columns, a list of columns or a TableType. Optional <code>default</code> and <code>extraValues</code> may also be specified.


## Examples

### Example #1 
Create a table from the list with the column named &#34;Letters&#34; using the default splitter.
```powerquery
Table.FromList({"a", "b", "c", "d"}, null, {"Letters"})
```

Result: 
```powerquery
Table.FromRecords({
    [Letters = "a"],
    [Letters = "b"],
    [Letters = "c"],
    [Letters = "d"]
})

```


### Example #2 
Create a table from the list using the Record.FieldValues splitter with the resulting table having &#34;CustomerID&#34; and &#34;Name&#34; as column names.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
