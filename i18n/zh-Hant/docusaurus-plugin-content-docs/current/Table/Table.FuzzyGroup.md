---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


依據索引鍵的模糊比對，將資料表中資料列分組。


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

為每個資料列內指定資料行 `key` 中的值進行模糊比對，來為 `table` 的資料列分組。 系統會針對每個群組建立一筆記錄，其中包含索引鍵資料行 (及其值) 以及 `aggregatedColumns` 指定的任何彙總資料行。 此函式無法保證傳回資料列的固定順序。

可以選擇納入一組 `options`，以指定如何比較索引鍵資料行。選項包含:

-   `Culture` : 允許依據文化特性專屬的規則為記錄分組。其可以是任何有效的文化特性名稱。例如，"ja-jp" 的文化特性選項會根據日文文化特性為記錄分組。預設值為 ""，即不因文化特性而異 (英文) 進行分組。
-   `IgnoreCase` : 邏輯 (true/false) 值，允許不區分大小寫的索引鍵分組。例如，若為 true，"Grapes" 會與 "grapes" 分為同一組。預設值為 true。
-   `IgnoreSpace` : 邏輯 (true/false) 值，允許合併文字部分以尋找群組。例如，若為 true，"Gra pes" 會與 "Grapes" 分為同一組。預設值為 true。
-   `SimilarityColumnName` : 顯示輸入值與該輸入之代表值之相似性的資料行名稱。預設值為 Null，表示將不會新增資料行顯示相似性。
-   `Threshold` : 介於 0.00 到 1.00 之間的數字，指出將兩個值分成一組所依據的相似度分數。 例如，只有在此選項設定為小於 0.90 時，「Grapes」才會與「Graes」(缺少「p」) 分成一組。 閾值 1.00 表示指定條件為完全相符。 (請注意，模糊的「完全相符」可能會忽略大小寫、字順序和標點符號等差異。) 預設值為 0.80。
-   `TransformationTable` : 允許依據自訂值對應來為記錄分組的資料表。其應包含 "From" 和 "To" 資料行。例如，如果提供轉換資料表，而 "From" 資料行包含 "Grapes"，且 "To" 資料行包含 "Raisins"，則 "Grapes" 會與 "Raisins" 分為同一組。請注意，轉換會套用到轉換資料表中該文字出現的所有地方。使用上述轉換資料表時，"Grapes are sweet" 也會與 "Raisins are sweet" 分為同一組。


## Examples

### Example #1
將資料表分組並新增彙總資料行 \[Count\]，其中包含各個位置的員工數目 (`each Table.RowCount(_)`)。
```powerquery
Table.FuzzyGroup(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
