---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


输入与你的注册相关联的 Azure Enterprise REST API 终结点的 URL


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

返回 Azure Enterprise API 提供的报表和月份列表


## Examples

### Example #1 
使用 AzureEnterprise.Tables 函数，然后定位到特定的值以获取结果。
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
表
```



