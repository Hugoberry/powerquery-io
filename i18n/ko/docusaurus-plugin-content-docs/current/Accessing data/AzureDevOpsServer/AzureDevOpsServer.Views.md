---
title: AzureDevOpsServer.Views
---

# AzureDevOpsServer.Views


## Description

조직 및 프로젝트 이름을 입력합니다.


## Syntax

```powerquery
AzureDevOpsServer.Views(
    url as text,
    project as text,
    areaPath as text,
    optional options as record
) as table
```


## Details

Azure DevOps에서 제공하는 OData 피드의 테이블을 반환합니다.


