---
title: Table.FindText
---

# Table.FindText


傳回資料表中包含指定文字的所有資料列。


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

傳回資料表 <code>table</code> 中包含文字 <code>text</code> 的資料列。如果找不到文字，就會傳回空白資料表。


## Examples

### Example #1 
找出資料表中包含 &#34;Bob&#34; 的資料列。
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
