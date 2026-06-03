---
title: Salesforce.Reports
---

# Salesforce.Reports


從 Salesforce 帳戶傳回報表。


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

在認證中所提供的 Salesforce 帳戶傳回報表。該帳戶會透過所提供的環境 `loginUrl` 進行連線。若未提供任何環境，則該帳戶會連線至產品 (https://login.salesforce.com)。可提供選擇性的記錄參數 `options`，來指定其他屬性。記錄可包含下列欄位:

-   `ApiVersion` : 用於此查詢的 Salesforce API 版本。若未指定，會使用 API 版本 29.0。
-   `Timeout` : 控制在放棄對伺服器提出的要求之前，要等候的持續時間長度。預設值依來源而定。



## Category
Accessing data
