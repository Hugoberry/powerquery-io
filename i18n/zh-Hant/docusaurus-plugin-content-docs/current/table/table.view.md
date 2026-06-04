---
title: Table.View
---

# Table.View


以使用者定義的處理常式來建立或擴充資料表以進行查詢和動作操作。


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

傳回 `table` 的檢視，其中 `handlers` 所指定的函式可在將作業套用至檢視時，用於取代預設的作業行為。

若有提供 `table`，則所有處理常式函式都為選用項目。若未提供 `table`，則 `GetType` 與 `GetRows` 處理常式函式為必要項目。若沒有為作業指定處理常式函式，就會改為將作業的預設行為套用至 `table` (但在 `GetExpression` 的情況下除外)。

處理常式函式傳回的值必須在語意上等同於在 `table` (在 `GetExpression` 的情況下則為產生的檢視) 套用作業的結果。

若處理常式函式引發錯誤，就會將預設的作業行為套用至檢視。

`Table.View` 可用於實作摺疊資料來源 – 將 M 查詢轉譯成來源特定查詢 (例如從 M 查詢建立 T-SQL 陳述式)。

如需更完整的 `Table.View` 描述，請參閱已發佈的 Power Query 自訂連接器文件。


## Examples

### Example #1
建立不需要存取資料列的基本檢視，以判斷類型或資料列計數。
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
