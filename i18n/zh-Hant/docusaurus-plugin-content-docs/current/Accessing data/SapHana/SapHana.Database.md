---
title: SapHana.Database
---

# SapHana.Database


## Description

傳回 SAP HANA 資料庫中的封裝。


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

從 SAP HANA 資料庫 <code>server</code> 傳回多維度套件的資料表。可指定選擇性的記錄參數 <code>options</code>，來控制下列選項:    <ul><li><code>Query</code> : 用於擷取資料的原生 SQL 查詢。如果查詢會產生多個結果集，只會傳回第一個結果集。</li><li><code>Distribution</code> : SapHanaDistribution，會設定連接字串中 &quot;Distribution&quot; 屬性的值。陳述式路由是在執行陳述式前，評估分散式系統中適當伺服器節點的方法。預設值為 SapHanaDistribution.All。</li><li><code>Implementation</code> : 指定要使用的 SAP HANA 連接器實作。</li><li><code>EnableColumnBinding</code> : 擷取資料時，將變數繫結至 SAP Hana 結果集的資料行。可能會以記憶體使用率稍高的成本提升效能。預設值為 false。</li><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值為 15 秒。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值為十分鐘。</li></ul>    



## Category
Accessing data
