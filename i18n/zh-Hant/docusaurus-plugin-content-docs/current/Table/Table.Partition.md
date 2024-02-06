---
title: Table.Partition
---

# Table.Partition


根據指定的群組和資料行數目，將資料表分割成資料表清單。


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

根據 <code>column</code> 的值和 <code>hash</code> 函數，將 <code>table</code> 分割成 <code>groups</code> 份資料表的清單。    <code>hash</code> 函數會套用至 <code>column</code> 資料列的值，以便取得該資料列的雜湊值。雜湊值模數 <code>groups</code> 會決定要將該資料列放入哪些傳回的資料表中。    <ul>       <li><code>table</code>: 要分割的資料表。</li>       <li><code>column</code>: 要雜湊處理的資料行，以便決定該資料列會位於哪些傳回的資料表中。</li>       <li><code>groups</code>: 輸入資料表即將分割成為的資料表數目。</li>       <li><code>hash</code>: 套用以取得雜湊值的函數。</li>    </ul>  


## Examples

### Example #1 
使用資料行的值做為雜湊函數，針對資料行 [a]，將資料表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; 分割成 2 份資料表。
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
