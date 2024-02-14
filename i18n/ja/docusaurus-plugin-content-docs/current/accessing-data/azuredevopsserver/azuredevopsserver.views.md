---
title: AzureDevOpsServer.Views
---

# AzureDevOpsServer.Views


組織とプロジェクトの名前を入力します。


## Syntax

```powerquery
AzureDevOpsServer.Views(
    url as text,
    project as text,
    areaPath as text,
    optional options as record
) as table
```


## Remarks

Azure DevOps が提供する OData フィードのテーブルを返します。


