---
title: Table.First
---

# Table.First


傳回第一個資料列或指定的預設值。


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

傳回 <code>table</code> 的第一個資料列，如果資料表是空的，則傳回選擇性的預設值 <code>default</code>。


## Examples

### Example #1 
找出資料表的第一個資料列。
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
尋找資料表 &lt;code&gt;(\{})&lt;/code&gt; 的第一個資料列，如果是空的，則傳回 [a = 0, b = 0]。
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
