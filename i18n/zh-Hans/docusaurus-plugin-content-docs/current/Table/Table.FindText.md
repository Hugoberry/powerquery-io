---
title: Table.FindText
---

# Table.FindText


## Description

返回表中包含给定文本的所有行。


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

返回表 <code>table</code> 中包含文本 <code>text</code> 的行。如果找不到文本，则返回空表。


## Examples

### Example #1 
查找表中包含 &#34;Bob&#34; 的行。
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