---
title: OleDb.DataSource
---

# OleDb.DataSource


從 OLE DB 資料來源傳回 SQL 資料表與檢視的資料表。


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

從連接字串 `connectionString` 指定的 OLE DB 資料來源，傳回 SQL 資料表與檢視的資料表。`connectionString` 可以是文字或屬性值組的記錄。屬性值可以是文字或數字。您可提供選用的記錄參數 `options` 來指定其他屬性。記錄可以包含下列欄位:

-   `CreateNavigationProperties` : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。
-   `NavigationPropertyNameGenerator` : 用於建立導覽屬性名稱的函式。
-   `Query` : 用於擷取資料的原生 SQL 查詢。如果查詢會產生多個結果集，只會傳回第一個結果集。
-   `HierarchicalNavigation` : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 True)。
-   `ConnectionTimeout` : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。
-   `CommandTimeout` : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。
-   `SqlCompatibleWindowsAuth` : 邏輯值 (true/false)，判斷是否要為 Windows 驗證產生與 SQL Server 相容的連接字串選項。預設值為 true。

例如，記錄參數可指定為 \[option1 = value1, option2 = value2...\] 或 \[Query = "select ..."\]。



## Category
Accessing data
