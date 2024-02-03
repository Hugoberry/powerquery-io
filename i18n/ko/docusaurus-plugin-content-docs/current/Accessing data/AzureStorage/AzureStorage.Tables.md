---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Azure 스토리지 자격 증명 모음에서 지정된 계정에 있는 테이블을 포함하는 탐색 테이블을 반환합니다.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Azure 스토리지 자격 증명 모음에서 계정 URL(<code>account</code>)에 있는 각 테이블에 대한 행을 포함하는 탐색 테이블을 반환합니다. 각 행에는 Azure 테이블 링크가 포함되어 있습니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 제공하여 추가 속성을 지정할 수도 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>Timeout</code> : 서버에 대한 요청을 중단하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 원본에 따라 다릅니다.</li></ul>



## Category
Accessing data
