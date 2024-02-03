---
title: Table.Distinct
---

# Table.Distinct


## Description

移除資料表中重複的資料列。


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

從資料表移除重複的資料列。    選擇性參數，<code>equationCriteria</code>，指定要測試哪些資料行的重復資料表。如果未指定 <code>equationCriteria</code>，會測試所有資料行。<br />    <br />    因為 Power Query 有時會將特定作業卸載至後端資料來源 (稱為「摺疊」)，有時也會略過非絕對必要的操作  來最佳化查詢，一般而言，不保證會保留哪些特定重複項目。    例如，您不能假設具有一組唯一欄值的第一列會保留，而進一步向下在表格中的資料列將會移除。    如果您希望重複的移除行為可以預測，首先使用 <code>Table.Buffer</code> 緩衝處理資料表。


## Examples

### Example #1 
移除資料表中重複的資料列。
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
從資料表 &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; 的資料行 [b] 中移除重複的資料列。
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
