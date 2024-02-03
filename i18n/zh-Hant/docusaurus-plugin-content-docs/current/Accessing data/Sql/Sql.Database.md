---
title: Sql.Database
---

# Sql.Database


## Description

傳回 SQL Server 資料庫中 SQL 資料表、檢視表和預存函數的資料表。


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

從伺服器 <code>server</code> 上的 SQL Server 資料庫 <code>database</code>，傳回 SQL 資料表、檢視與預存函式的資料表。指定伺服器時可選擇性地指定連接埠 (以冒號分隔)。可指定選擇性記錄參數 <code>options</code>，來控制下列選項:    <ul><li><code>Query</code> : 用於擷取資料的原生 SQL 查詢。如果查詢會產生多個結果集，只會傳回第一個結果集。</li><li><code>CreateNavigationProperties</code> : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。</li><li><code>NavigationPropertyNameGenerator</code> : 用於建立導覽屬性名稱的函式。</li><li><code>MaxDegreeOfParallelism</code> : 於產生的 SQL 查詢中設定 &quot;maxdop&quot; 查詢子句值的數字。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。</li><li><code>HierarchicalNavigation</code> : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。</li><li><code>MultiSubnetFailover</code> : 邏輯值 (True/False)，設定連接字串中 &quot;MultiSubnetFailover&quot; 屬性值的值 (預設為 False)。</li><li><code>UnsafeTypeConversions</code> : 邏輯 (true/false) 若為 true，則會嘗試折疊可能失敗並導致整個查詢失敗的類型轉換。不建議用於一般用途。</li><li><code>ContextInfo</code> : 用以在執行每項命令之前設定 CONTEXT_INFO 的二進位值。</li><li><code>OmitSRID</code> : 邏輯 (true/false) 若為 true，則會在從幾何及地理類型產生 Well-Known Text 時省略 SRID。</li><li><code>EnableCrossDatabaseFolding</code> : 邏輯 (true/false) 值，若為 true，則允許查詢折疊相同伺服器上的資料庫。預設值為 false。</li></ul>    例如，記錄參數可指定為 [option1 = value1, option2 = value2...] 或 [Query = "select ..."]。    



## Category
Accessing data
