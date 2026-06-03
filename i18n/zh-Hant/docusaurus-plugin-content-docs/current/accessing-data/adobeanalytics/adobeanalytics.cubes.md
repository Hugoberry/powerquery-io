---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


傳回 Adobe Analytics 中的報表套件。


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

從 Adobe Analyics 傳回多維度套件的資料表。您可指定選擇性的記錄參數 `options` 來控制下列選項:

-   `HierarchicalNavigation` : 邏輯值 (True/False)，設定是否要依據資料表的結構描述名稱分組方式，檢視資料表 (預設值為 False)。
-   `MaxRetryCount` : 輪詢查詢結果時的重試次數。預設值為 120。
-   `RetryInterval` : 每次重試之間的持續時間。預設值為 1 秒。
-   `Implementation` : 指定 Adobe Analytics API 版本。有效值為: "2.0"。預設值使用 API 版本 1.4。



## Category
Accessing data
