---
title: Table.FromRows
---

# Table.FromRows


根據列值及選擇性資料行清單建立資料表。


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

根據清單 <code>rows</code> 建立資料表，清單內每個項目都是包含單一列資料行值的內部清單。可為 <code>columns</code> 提供資料行名稱的選擇性清單、資料表類型或資料行數目。


## Examples

### Example #1 
傳回 [CustomerID] 資料行值為 \{1, 2} 、 [Name] 資料行值為 \{&#34;Bob&#34;, &#34;Jim&#34;} 及 [Phone] 資料行值為 \{&#34;123-4567&#34;, &#34;987-6543&#34;} 的資料表。
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
傳回 [CustomerID] 資料行值為 \{1, 2} 、 [Name] 資料行值為 \{&#34;Bob&#34;, &#34;Jim&#34;} 及 [Phone] 資料行值為 \{&#34;123-4567&#34;, &#34;987-6543&#34;} 的資料表，其中 [CustomerID] 是數字類型，而 [Name] 和 [Phone] 是文字類型。
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
