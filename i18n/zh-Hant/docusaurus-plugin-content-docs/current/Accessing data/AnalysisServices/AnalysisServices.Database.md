---
title: AnalysisServices.Database
---

# AnalysisServices.Database


從 Analysis Services 資料庫傳回多維度 Cube 或表格式模型的資料表。


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

從伺服器 <code>server</code> 上的 Analysis Services 資料庫 <code>database</code>，傳回多維度 Cube 或表格式模型的資料表。可指定選用性的記錄參數 <code>options</code>，來控制下列選項:    <ul><li><code>Query</code> : 用於擷取資料的原生 MDX 查詢。</li><li><code>TypedMeasureColumns</code> : 邏輯值，指出多維度或表格式模型中所指定的類型，是否將用為新增之量值資料行的類型。設定為 False 時，會為所有量值資料行使用「數字」類型。此選項的預設值為 False。</li><li><code>Culture</code> : 指定資料文化特性的文化特性名稱。其與 [地區設定識別碼] 連接字串屬性相對應。</li><li><code>CommandTimeout</code> : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值取決於驅動程式。</li><li><code>ConnectionTimeout</code> : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。</li><li><code>SubQueries</code> : 設定連接字串中 &quot;SubQueries&quot; 屬性值的數字 (0、1 或 2)。此數字可控制在部份選取或 Subcube 上計算得出的成員之行為。(預設值為 2)。</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
