---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


在特定主機上傳回 Analysis Services 資料庫。


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

在 Analysis Services 執行個體 `server` 上傳回資料庫。可提供選擇性的記錄參數 `options`，來指定其他屬性。記錄可包含下列欄位:

-   `TypedMeasureColumns` : 邏輯值，指出多維度或表格式模型中所指定的類型，是否將用為新增之量值資料行的類型。設定為 False 時，會為所有量值資料行使用「數字」類型。此選項的預設值為 False。
-   `Culture` : 指定資料文化特性的文化特性名稱。其與 \[地區設定識別碼\] 連接字串屬性相對應。
-   `CommandTimeout` : 控制伺服器端查詢在取消之前，可以執行的持續時間長度。預設值取決於驅動程式。
-   `ConnectionTimeout` : 控制在放棄嘗試連線到伺服器之前，要等候的持續時間長度。預設值取決於驅動程式。
-   `SubQueries` : 設定連接字串中 "SubQueries" 屬性值的數字 (0、1 或 2)。此數字可控制在部份選取或 Subcube 上計算得出的成員之行為。(預設值為 2)。
-   `Implementation`



## Category
Accessing data
