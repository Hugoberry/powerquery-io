---
title: DB2.Database
---

# DB2.Database


傳回在 Db2 資料庫中可用的 SQL 資料表及檢視的資料表。


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

傳回 Db2 資料庫 (位於名為 <code>database</code> 之資料庫執行個體內的伺服器 <code>server</code> 上) 中可用的 SQL 資料表與檢視之資料表。指定伺服器時可選擇性地指定連接埠 (以冒號分隔)。可指定選擇性記錄參數 <code>options</code>，來控制下列選項:    <ul><li><code>CreateNavigationProperties</code> : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。</li><li><code>NavigationPropertyNameGenerator</code> : 用於建立導覽屬性名稱的函式。</li><li><code>Query</code> : 用於擷取資料的原生 SQL 查詢。如果查詢會產生多個結果集，只會傳回第一個結果集。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。</li><li><code>HierarchicalNavigation</code> : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。</li><li><code>Implementation</code> : 指定要使用的內部資料庫提供者實作。有效值為: &quot;IBM&quot; 與 &quot;Microsoft&quot;。</li><li><code>BinaryCodePage</code> : 將 Db2 FOR BIT 二進位資料解碼成字元字串時所使用的 CCSID (編碼字元集識別元) 數字。套用至 Implementation = &quot;Microsoft&quot;。設定為 0 可停用轉換 (預設)。設定為 1 則會根據資料庫編碼來進行轉換。設定為其他 CCSID 數字，則會轉換成應用程式編碼。</li><li><code>PackageCollection</code> : 指定套件集合的字串值 (預設為 &quot;NULLID&quot;)，以允許使用處理 SQL 陳述式所需的共用套件。套用至 Implementation = &quot;Microsoft&quot;。</li><li><code>UseDb2ConnectGateway</code> : 指定是否透過 Db2 Connect 閘道連線。適用於實作 = &quot;Microsoft&quot;。</li></ul>    例如，記錄參數可指定為 [option1 = value1, option2 = value2...] 或 [Query = "select ..."]。    



## Category
Accessing data
