---
title: VSTS.Contents
---

# VSTS.Contents


## Description

Azure DevOps Analytics 서비스의 URL을 입력합니다.


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Azure DevOps Analytics 서비스 URL에서 이진 값으로 다운로드한 콘텐츠를 반환합니다. 이 함수는 액세스할 수 있는 모든 조직에 전역 자격 증명을 사용합니다.


