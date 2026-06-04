---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Amazon Redshift 데이터베이스에서 데이터를 가져옵니다.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

데이터베이스 `database`의 Amazon Redshift 클러스터 `server`에 있는 테이블을 나열하는 테이블을 반환합니다. 선택적 레코드 매개 변수인 `options`를 지정하여 다음 옵션을 제어할 수 있습니다.

-   `Provider Name`: 연결의 공급자 이름으로 사용할 텍스트 값입니다. Microsoft 인증을 사용할 때 사용됩니다.
-   `Batch Size`: 서버에 대한 단일 호출에서 가져온 행 수입니다.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



