---
title: Informix.Database
---

# Informix.Database


傳回 Informix 資料庫中提供的 SQL 資料表和檢視的資料表。


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

傳回 Informix 資料庫 (位於伺服器 `server` 上名稱為 `database` 的資料庫執行個體內) 中可用的 SQL 資料表與檢視之資料表。指定伺服器時可選擇性地指定連接埠 (以冒號分隔)。您可指定選擇性的記錄參數 `options` 以控制下列選項:

-   `CreateNavigationProperties` : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。
-   `NavigationPropertyNameGenerator` : 用於建立導覽屬性名稱的函式。
-   `Query` : 用於擷取資料的原生 SQL 查詢。如果查詢會產生多個結果集，只會傳回第一個結果集。
-   `CommandTimeout` : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。
-   `ConnectionTimeout` : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。
-   `HierarchicalNavigation` : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。

例如，記錄參數可指定為 \[option1 = value1, option2 = value2...\] 或 \[Query = "select ..."\]。



## Category
Accessing data
