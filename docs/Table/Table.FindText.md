---
title: Table.FindText
---

# Table.FindText


## Description

Returns all the rows that contain the given text in the table.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Returns the rows in the table <code>table</code> that contain the text <code>text</code>. If the text is not found, an empty table is returned.


## Examples

### Example #1 
Find the rows in the table that contain &#34;Bob&#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
