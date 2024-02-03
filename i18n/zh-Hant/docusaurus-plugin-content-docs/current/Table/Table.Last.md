---
title: Table.Last
---

# Table.Last


## Description

傳回最後一個資料列或指定的預設值。


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

傳回 <code>table</code> 的最後一個資料列，如果資料表是空的，則傳回選擇性的預設值 <code>default</code>。


## Examples

### Example #1 
找出資料表的最後一個資料列。
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
尋找資料表 &lt;code&gt;(\{})&lt;/code&gt; 的最後一個資料列，如果是空的，則傳回 [a = 0, b = 0]。
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
