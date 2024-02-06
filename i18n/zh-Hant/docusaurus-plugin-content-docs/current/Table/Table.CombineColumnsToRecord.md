---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


將指定資料行合併成以記錄為值的新資料行，其中每個記錄的欄位名稱與值都對應到合併資料行的資料行名稱與值。


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

將 <code>table</code> 的指定資料行合併成名為 <code>newColumnName</code> 的新記錄值資料行，其中每個記錄都有欄位名稱和值對應到已合併資料行的資料行名稱與值。若為 <code>options</code> 指定記錄，則可能會提供下列選項:     <ul>     <li> <code>DisplayNameColumn</code>: 指定為文字時，表示應將指定之資料行名稱視為記錄的顯示名稱。這不需要為記錄本身的其中一個資料行。</li>     <li> <code>TypeName</code>: 指定為文字時，會為產生的記錄提供邏輯類型名稱，該名稱可在資料載入期間用於載入環境驅動行為。</li>    </ul>    



## Category
Table.Transformation
