---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

使用提供的函式以轉換資料行名稱。


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

使用指定的 <code>nameGenerator</code> 函數轉換資料行名稱。有效選項:    <div>      <code>MaxLength</code> 可指定新資料行名稱的長度上限。若指定函數的結果包含較長的資料行名稱，將會加以修剪。    </div>    <div>      <code>Comparer</code> 可用來控制產生新資料行名稱時的比較。比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。    </div>    <div>      公式語言中提供下列內建比較子:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: 用來執行精確序數比較</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: 用來執行不區分大小寫的精確序數比較</li>      <li> <code>Comparer.FromCulture</code>: 用來執行文化特性感知的比較</li>    </ul>    


## Examples

### Example #1 
請從資料行名稱移除 &lt;code&gt;#(tab)&lt;/code&gt; 字元
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
轉換資料行名稱，以產生長度為 6 並區分大小寫的名稱。
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
