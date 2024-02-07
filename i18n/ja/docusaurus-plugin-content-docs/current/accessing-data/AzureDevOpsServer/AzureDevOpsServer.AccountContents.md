---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


Azure DevOps Analytics サービスの URL を入力します。


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Remarks

Azure DevOps Analytics サービス URL からダウンロードされたコンテンツをバイナリ値として返します。この関数は、組織ごとにそれぞれ異なる資格情報を使用します。


