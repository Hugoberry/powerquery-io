---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Google BigQuery 데이터베이스에서 데이터를 가져옵니다.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Google BigQuery에서 사용 가능한 프로젝트가 나열된 테이블을 반환합니다. 선택적 레코드 매개 변수인 <code>options</code>를 지정하여 다음 옵션을 제어할 수도 있습니다.      <ul>        <li><code>ConnectionTimeout</code>: 서버 연결 시도를 포기하기 전에 대기하는 시간을 제어하는 기간입니다. 기본값은 ODBC Connection Timeout 값입니다.</li>        <li><code>CommandTimeout</code>: 서버 쪽 쿼리가 취소되기 전에 실행될 수 있는 시간을 제어하는 기간입니다.</li>        <li><code>BillingProject</code>: 청구 프로젝트 ID입니다. 기본값은 첫 번째로 사용 가능한 프로젝트입니다.</li>        <li><code>UseStorageApi</code>: 대규모 결과 집합에 BigQuery Storage API를 사용할지 여부를 지정합니다. 기본값은 true(Storage API 사용)입니다. Storage API를 사용하지 않으려면 false로 설정합니다.</li>      </ul>    레코드 매개 변수는 [option1 = value1, option2 = value2...]와 같이 지정됩니다.    


## Examples

### Example #1 
Google BigQuery에서 사용 가능한 프로젝트를 나열합니다.
```powerquery
GoogleBigQuery.Database()
```



