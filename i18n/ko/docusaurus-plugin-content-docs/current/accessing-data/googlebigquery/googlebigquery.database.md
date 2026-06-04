---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Google BigQuery 데이터베이스에서 데이터를 가져옵니다.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Google BigQuery에서 사용 가능한 프로젝트가 나열된 테이블을 제공합니다. 다음 옵션을 제어하기 위해 선택적 레코드 매개변수인 `options`를 지정할 수 있습니다:

-   `ConnectionTimeout`: 서버에 대한 연결 시도를 중단하기 전 대기 시간을 제어하는 기간입니다. 기본값은 ODBC 연결 시간 초과 값입니다.
-   `CommandTimeout`: 서버 측 쿼리가 취소되기 전에 실행이 허용되는 시간을 제어하는 기간입니다.
-   `BillingProject`: 청구 프로젝트 ID 기본값은 최초로 사용 가능한 프로젝트입니다.
-   `UseStorageApi`: 큰 결과 집합에 BigQuery Storage API를 사용할지 여부를 지정합니다. Storage API를 사용하도록 설정된 기본값은 true입니다. Storage API를 사용하지 않으려면 false로 설정

레코드 매개 변수는 \[option1 = value1, option2 = value2...\]로 지정됩니다.


## Examples

### Example #1
Google BigQuery에서 사용 가능한 프로젝트를 나열합니다.
```powerquery
GoogleBigQuery.Database()
```



