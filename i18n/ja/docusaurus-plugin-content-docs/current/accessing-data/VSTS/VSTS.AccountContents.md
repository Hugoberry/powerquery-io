---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Azure DevOps Analytics サービスの URL を入力します。


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Azure DevOps Analytics サービス URL からダウンロードされたコンテンツをバイナリ値として返します。この関数は、組織ごとにそれぞれ異なる資格情報を使用します。


