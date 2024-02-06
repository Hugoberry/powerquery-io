---
title: MySQL.Database
---

# MySQL.Database


傳回 MySQL 資料庫中可用的 SQL 資料表、檢視表和預存純量函式的資料表。


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

傳回 MySQL 資料庫 (位於伺服器 <code>server</code> 上名稱為 <code>database</code> 的資料庫執行個體內) 中可用的 SQL 資料表、檢視與預存純量函式的資料表。指定伺服器時可選擇性地指定連接埠 (以冒號分隔)。可指定選擇性記錄參數 <code>options</code>，來控制下列選項:    <ul><li><code>Encoding</code> : 這個 TextEncoding 值會指定字元集，用來為傳送到伺服器的所有查詢編碼 (預設為 null)。</li><li><code>CreateNavigationProperties</code> : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 True)。</li><li><code>NavigationPropertyNameGenerator</code> : 用於建立導覽屬性名稱的函式。</li><li><code>Query</code> : 用於擷取資料的原生 SQL 查詢。如果查詢會產生多個結果集，只會傳回第一個結果集。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。</li><li><code>TreatTinyAsBoolean</code> : 邏輯值 (True/False)，決定是否要在伺服器上強制將 tinyint 資料行執行為邏輯值。預設值為 True。</li><li><code>OldGuids</code> : 邏輯值 (True/False)，設定是否要將 char(36) 資料行 (若為 False) 或 binary(16) 資料行 (若為 True) 視為 GUID。預設值為 False。</li><li><code>ReturnSingleDatabase</code> : 邏輯值 (True/False)，設定是要傳回所有資料庫的所有資料表 (若為 False)，還是要僅傳回指定資料庫的資料表與檢視 (若為 True)。預設值為 False。</li><li><code>HierarchicalNavigation</code> : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。</li></ul>    例如，記錄參數可指定為 [option1 = value1, option2 = value2...] 或 [Query = "select ..."]。    



## Category
Accessing data
