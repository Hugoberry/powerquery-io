---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

將第一個資料列的值升階為新的資料行標頭 (亦即資料行名稱)。


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

將第一個資料列的值升階為新的資料行標頭 (亦即資料行名稱)。預設設定是只有文字或數值可以升階為標頭。有效選項:    <div>      <code>PromoteAllScalars</code>: 若設為 <code>true</code>，第一個資料列中的所有純量值皆會使用 <code>Culture</code> (如有指定，或為目前文件的地區設定) 升階為標頭。    對於無法轉換文字的值，將會使用預設的資料行名稱。    </div>    <div>    <code>Culture</code>: 文化特性名稱，可指定資料的文化特性。    </div>  


## Examples

### Example #1 
將資料表中第一個資料列的值升階。
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
將資料表第一個資料列中的所有純量值全部升階為標頭。
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
