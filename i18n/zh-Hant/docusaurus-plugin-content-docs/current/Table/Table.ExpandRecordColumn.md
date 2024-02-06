---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


將記錄的資料行擴充成包含每個值的資料行。


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

指定輸入 <code>table</code> 中記錄的 <code>column</code> 之後，建立資料表，並針對記錄中的每個欄位各包含一個資料行。或者，也可指定 <code>newColumnNames</code> 以針對新資料表中的欄位確保唯一的名稱。    <ul>        <li><code>table</code>: 包含要擴充之記錄資料行的原始資料表。</li>        <li><code>column</code>: 要擴充的資料行。</li>        <li><code>fieldNames</code>: 要擴充成資料表資料行的欄位清單。</li>        <li><code>newColumnNames</code>: 要提供新資料行的資料行名稱清單。新的資料行名稱不得與新資料表中的任何資料行重複。</li>    </ul>


## Examples

### Example #1 
將資料表 &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; 中的資料行 [a] 擴充成 3 個資料行 &#34;aa&#34;、&#34;bb&#34; 和 &#34;cc&#34;。
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
