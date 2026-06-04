---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Microsoft Entra ID를 사용하여 Google BigQuery 데이터베이스에서 데이터 가져오기


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

`청구 프로젝트 ID`에 대해 Microsoft Entra ID로 Google BigQuery에서 사용 가능한 프로젝트를 나열하는 테이블을 제공합니다. 다음 옵션을 제어하기 위해 선택적 레코드 매개변수인 `options`를 지정할 수 있습니다:

-   `ConnectionTimeout`: 서버에 대한 연결 시도를 중단하기 전 대기 시간을 제어하는 기간입니다. 기본값은 ODBC 연결 시간 초과 값입니다.
-   `CommandTimeout`: 서버 측 쿼리가 취소되기 전에 실행이 허용되는 시간을 제어하는 기간입니다.
-   `UseStorageApi`: 큰 결과 집합에 BigQuery Storage API를 사용할지 여부를 지정합니다. Storage API를 사용하도록 설정된 기본값은 true입니다. Storage API를 사용하지 않으려면 false로 설정
-   `AudienceUri`: ODBC 드라이버가 토큰 교환 요청에 사용할 수 있는 대상 그룹 URI입니다. 이 필드는 pool\_id가 인력 풀을 식별하는 전역적으로 고유한 이름인 완전한 URI여야 합니다 (예: //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread).

레코드 매개 변수는 \[option1 = value1, option2 = value2...\]로 지정됩니다.


## Examples

### Example #1
Microsoft Entra ID를 사용하여 Google BigQuery에서 사용 가능한 프로젝트 나열
```powerquery
GoogleBigQueryAad.Database()
```



