---
title: Table.FromRecords
---

# Table.FromRecords


將記錄清單轉換成資料表。


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

將指定的記錄清單轉換成資料表。

-   `records`: 要轉換為資料表的記錄清單。
-   `columns`: (選用) 資料表的欄位名稱清單，或資料表類型。
-   `missingField`: (選用) 指定處理資料列中遺漏的欄位之方式。使用下列其中一個值:
    -   `MissingField.Error`: 任何遺漏的欄位都會產生錯誤 (預設)。
    -   `MissingField.UseNull`: 任何遺漏的欄位會以 `null` 值表示。
      
    在此參數中使用 `MissingField.Ignore` 會產生錯誤。


## Examples

### Example #1
從記錄建立資料表，使用記錄欄位名稱做為資料行名稱。
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
從具有類型的資料行之記錄建立資料表，並選取數字資料行。
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
建立資料表，包含指定記錄中客戶的名字、中間名縮寫和姓氏。如果遺漏任何值，請將該值替換為 `null`。
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
