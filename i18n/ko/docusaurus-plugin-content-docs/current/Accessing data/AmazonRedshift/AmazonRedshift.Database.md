---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Amazon Redshift 데이터베이스에서 데이터를 가져옵니다.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

데이터베이스 <code>database</code>의 Amazon Redshift 클러스터 <code>server</code>에 있는 테이블을 나열하는 테이블을 반환합니다. 다음 옵션을 제어하기 위해 선택적 레코드 매개 변수인 <code>options</code>를 지정할 수 있습니다.:<ul><li><code>공급자 이름</code>: 연결에 대한 공급자 이름으로 사용할 텍스트 값입니다. Microsoft 인증을 사용할 때 사용됩니다.</li><li><code>배치 사이즈</code>: 서버에 대한 단일 호출에서 가져온 행 수입니다.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



