---
title: AzureStorage.Tables
---

# AzureStorage.Tables


返回一个导航表，它包含从 Azure 存储库的指定帐户中找到的表。


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

返回一个导航表，它包含从 Azure 存储库的帐户 URL <code>account</code> 中找到的每个表的行。每行都包含指向 Azure 表的链接。可能提供了可选记录参数 <code>options</code> 来指定其他属性。记录可包含以下字段:    <ul><li><code>Timeout</code> : 一个时间段，控制在放弃对服务器的请求之前等待的时间。默认值特定于源。</li></ul>



## Category
Accessing data
