---
title: Netezza.Database
---

# Netezza.Database


從 IBM Netezza 資料庫匯入資料。


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

從伺服器 `server` 上的 Netezza 伺服器資料庫 `database` 傳回包含 Netezza 資料表、檢視及預存函式的資料表。您可選擇為伺服器指定連接埠 (以冒號分隔)，也可指定選擇性記錄參數 `options` 以控制下列選項:

-   `CreateNavigationProperties`: 邏輯 (true/false)，設定是否要在傳回值上產生導覽屬性 (預設為 true)
-   `HierarchicalNavigation`: 邏輯 (true/false)，設定是否要依資料表的結構描述名稱分組方式來檢視資料表 (預設為 false)
-   `ConnectionTimeout`: 用於控制在放棄嘗試連線到伺服器之前，等待的時間長短。預設值取決於驅動程式。
-   `CommandTimeout`: 用於控制在伺服器端查詢取消之前，可以執行的時間長短。預設值取決於驅動程式。
-   `NormalizeDatabaseName`: 邏輯 (true/false)，設定要將資料庫名稱正常化為大寫，還是按字面解譯 (預設為 true)。

記錄參數會指定為 \[option1 = value1, option2 = value2...\]。


## Examples

### Example #1
列出 IBM Netezza 專案中的資料表。
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



