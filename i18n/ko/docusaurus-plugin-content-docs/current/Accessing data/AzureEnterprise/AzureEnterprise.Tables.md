---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

등록에 연결된 Azure 엔터프라이즈 REST API 끝점의 URL을 입력합니다.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Azure 엔터프라이즈 API에서 사용할 수 있는 보고서 및 개월 목록을 반환합니다.


## Examples

### Example #1 
AzureEnterprise.Tables 함수를 사용하고 특정 값을 탐색하여 결과를 얻습니다.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
테이블
```



