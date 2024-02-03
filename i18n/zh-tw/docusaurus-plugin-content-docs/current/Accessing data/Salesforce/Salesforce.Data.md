---
title: Salesforce.Data
---

# Salesforce.Data


## Description

從 Salesforce 帳戶傳回物件。


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

在認證中所提供的 Salesforce 帳戶傳回物件。該帳戶會透過所提供的環境 <code>loginUrl</code> 進行連線。若未提供任何環境，則該帳戶會連線至產品 (https://login.salesforce.com)。可提供選擇性的記錄參數 <code>options</code>，來指定其他屬性。記錄可包含下列欄位:    <ul><li><code>CreateNavigationProperties</code> : 邏輯值 (True/False)，設定是否要在傳回的值上產生導覽屬性 (預設為 False)。</li><li><code>ApiVersion</code> : 用於此查詢的 Salesforce API 版本。若未指定，會使用 API 版本 29.0。</li><li><code>Timeout</code> : 控制在放棄對伺服器提出的要求之前，要等候的持續時間長度。預設值依來源而定。</li></ul>    



## Category
Accessing data
