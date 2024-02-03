---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Azure AD를 사용하여 Google BigQuery 데이터베이스에서 데이터 가져오기


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      <code>청구 프로젝트 ID</code>에 대해 Azure AD를 사용하여 Google BigQuery에서 사용 가능한 프로젝트를 나열하는 테이블을 반환합니다. 다음 옵션을 제어하기 위해 선택적 레코드 매개 변수인 <code>options</code>를 지정할 수 있습니다.      <ul>        <li><code>ConnectionTimeout</code>: 서버 연결 시도를 포기하기 전에 대기하는 시간을 제어하는 기간입니다. 기본값은 ODBC 연결 시간 값입니다..</li>        <li><code>CommandTimeout</code>: 서버 측 쿼리가 취소되기 전에 실행할 수 있는 기간을 제어하는 기간입니다.</li>        <li><code>UseStorageApi</code>: 큰 결과 세트에 BigQuery Storage API를 사용할지 여부를 지정합니다. Storage API를 사용하려면 기본값이 true입니다. Storage API를 사용하지 않으려면 false로 설정하세요.</li>        <li><code>AudienceUri</code>: ODBC 드라이버가 토큰 교환 요청에 사용할 수 있는 대상 URI입니다. 이 필드는 정규화된 URI(예: //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread)여야 합니다. 여기서 pool_id는 인력 풀을 식별하기 위한 전역적 고유 이름입니다.</li>      </ul>    이 레코드 매개 변수는 [option1 = value1, option2 = value2...]과(와) 같이 지정됩니다.    


## Examples

### Example #1 
Azure AD를 사용하여 Google BigQuery에서 사용 가능한 프로젝트 나열
```powerquery
GoogleBigQueryAad.Database()
```



