---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

輸入與您的註冊相關聯的 Azure 企業版 REST API 端點 URL


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

從 Azure 企業版 API 傳回可用的報表和月份清單


## Examples

### Example #1 
使用 AzureEnterprise.Tables 函數，並巡覽至特定的值以取得結果。
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
資料表
```



