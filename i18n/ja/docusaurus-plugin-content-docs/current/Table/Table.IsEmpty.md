---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

テーブルに行が含まれているかどうかを示します。


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

<code>table</code> に行が含まれているかどうかを示します。行が存在しない (つまり、テーブルが空の) 場合は <code>true</code>、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
テーブルが空かどうかを調べます。
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
テーブル &lt;code&gt;(\{})&lt;/code&gt; が空かどうかを調べます。
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
