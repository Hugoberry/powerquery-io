---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Salesforce 계정에서 보고서를 반환합니다.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

자격 증명에서 제공된 Salesforce 계정의 보고서를 반환합니다. 계정은 제공된 <code>loginUrl</code> 환경을 통해 연결됩니다. 제공된 환경이 없을 경우 계정은 프로덕션에 연결됩니다(https://login.salesforce.com). 선택적 레코드 매개 변수 <code>options</code>은(는) 추가 속성을 지정하기 위해 제공될 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>ApiVersion</code> : 이 쿼리에 사용할 Salesforce API 버전입니다. 지정하지 않으면 API 버전 29.0이 사용됩니다.</li><li><code>Timeout</code> : 서버에 대한 요청을 중단하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 원본에 따라 다릅니다.</li></ul>    



## Category
Accessing data
