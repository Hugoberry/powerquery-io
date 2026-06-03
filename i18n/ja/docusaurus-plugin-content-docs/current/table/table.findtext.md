---
title: Table.FindText
---

# Table.FindText


指定されたテキストを含むテーブル内のすべての行を返します。


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

テキスト `text` を含むテーブル `table` 内の行を返します。テキストが見つからなかった場合は、空のテーブルを返します。


## Examples

### Example #1
テーブル内で "Bob" を含む行を探します。
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
