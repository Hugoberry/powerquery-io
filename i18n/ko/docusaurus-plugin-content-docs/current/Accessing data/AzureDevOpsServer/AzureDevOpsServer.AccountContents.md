---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


## Description

Azure DevOps Analytics 서비스의 URL을 입력합니다.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Details

DevOps Analytics 서비스 URL에서 이진 값으로 다운로드한 콘텐츠를 반환합니다. 이 함수는 조직마다 각기 다른 자격 증명을 사용합니다.


