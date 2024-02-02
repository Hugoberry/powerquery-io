---
title: Table.FromRows
---

# Table.FromRows


## Description

Creates a table from a list of row values and optional columns


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Creates a table from the list <code>rows</code> where each element of the list is an inner list that contains the column values for a single row.  An optional list of column names, a table type, or a number of columns could be provided for <code>columns</code>.


## Examples

### Example #1 
Return a table with column [CustomerID] with values \{1, 2}, column [Name] with values \{&#34;Bob&#34;, &#34;Jim&#34;}, and column [Phone] with values \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Return a table with column [CustomerID] with values \{1, 2}, column [Name] with values \{&#34;Bob&#34;, &#34;Jim&#34;}, and column [Phone] with values \{&#34;123-4567&#34;, &#34;987-6543&#34;}, where [CustomerID] is number type, and [Name] and [Phone] are text types.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
