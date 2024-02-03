---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

指出資料表是否包含任何資料列。


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

指出 <code>table</code> 是否包含任何資料列。如果沒有任何資料列 (亦即資料表是空的)，則傳回 <code>true</code>， 否則傳回 <code>false</code>。


## Examples

### Example #1 
判斷資料表是否是空的。
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
判斷資料表 &lt;code&gt;(\{})&lt;/code&gt; 是否為空的。
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
