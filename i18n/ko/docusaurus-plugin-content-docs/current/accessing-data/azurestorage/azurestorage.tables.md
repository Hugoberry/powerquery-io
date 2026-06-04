---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Azure 스토리지 자격 증명 모음에서 지정된 계정에 있는 테이블을 포함하는 탐색 테이블을 반환합니다.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Azure 스토리지 자격 증명 모음에서 계정 URL(`account`)에 있는 각 테이블에 대한 행을 포함하는 탐색 테이블을 반환합니다. 각 행에는 Azure 테이블에 대한 링크가 포함되어 있습니다. 추가 속성을 지정하기 위해 선택적 레코드 매개 변수인 `options`을(를) 제공할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.

-   `Timeout` : 서버에 대한 요청을 중단하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 원본에 따라 다릅니다.



## Category
Accessing data
