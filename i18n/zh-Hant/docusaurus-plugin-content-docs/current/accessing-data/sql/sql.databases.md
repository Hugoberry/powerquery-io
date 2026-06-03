---
title: Sql.Databases
---

# Sql.Databases


傳回 SQL Server 上資料庫的資料表。


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

傳回指定的 SQL 伺服器 `server` 上資料庫的資料表。您可指定選擇性的記錄參數 `options` 以控制下列選項:

-   `CreateNavigationProperties` : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。
-   `NavigationPropertyNameGenerator` : 用於建立導覽屬性名稱的函式。
-   `MaxDegreeOfParallelism` : 於產生的 SQL 查詢中設定 "maxdop" 查詢子句值的數字。
-   `CommandTimeout` : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。
-   `ConnectionTimeout` : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。
-   `HierarchicalNavigation` : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。
-   `MultiSubnetFailover` : 邏輯值 (True/False)，設定連接字串中 "MultiSubnetFailover" 屬性值的值 (預設為 False)。
-   `UnsafeTypeConversions` : 邏輯 (true/false) 若為 true，則會嘗試折疊可能失敗並導致整個查詢失敗的類型轉換。不建議用於一般用途。
-   `ContextInfo` : 用以在執行每項命令之前設定 CONTEXT\_INFO 的二進位值。
-   `OmitSRID` : 邏輯 (true/false) 若為 true，則會在從幾何及地理類型產生 Well-Known Text 時省略 SRID。
-   `EnableCrossDatabaseFolding` : 邏輯 (true/false) 值，若為 true，則允許查詢折疊相同伺服器上的資料庫。預設值為 false。

例如，記錄參數可指定為 \[option1 = value1, option2 = value2...\]。  
  
不支援設定要在伺服器上執行的 SQL 查詢。應改為使用 `Sql.Database` 來執行 SQL 查詢。



## Category
Accessing data
