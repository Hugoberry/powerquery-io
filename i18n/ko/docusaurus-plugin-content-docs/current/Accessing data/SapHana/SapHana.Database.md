---
title: SapHana.Database
---

# SapHana.Database


## Description

SAP HANA 데이터베이스에서 패키지를 반환합니다.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

SAP HANA 데이터베이스 <code>server</code>에서 다차원 패키지 테이블을 반환합니다. 선택적 레코드 매개 변수 <code>options</code>이(가) 다음 옵션을 제어하기 위해 지정될 수 있습니다.    <ul><li><code>Query</code> : 데이터를 검색하는 데 사용되는 원시 SQL 쿼리입니다. 쿼리를 통해 결과 집합이 여러 개 생성되면 첫 번째 결과 집합만 반환됩니다.</li><li><code>Distribution</code> : 연결 문자열에서 &quot;Distribution&quot; 속성 값을 설정하는 SapHanaDistribution입니다. 문을 라우팅하면 문을 실행하기 전에 배포된 시스템의 올바른 서버 노드를 평가할 수 있습니다. 기본값은 SapHanaDistribution.All입니다.</li><li><code>Implementation</code> : 사용할 SAP HANA 커넥터 구현을 지정합니다.</li><li><code>EnableColumnBinding</code> : 데이터를 가져올 때 SAP HANA 결과 집합의 열에 변수를 바인딩합니다. 약간 더 높은 메모리 사용률을 희생시키면서 잠재적으로 성능을 향상시킬 수 있습니다. 기본값은 false입니다.</li><li><code>ConnectionTimeout</code> : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 15초입니다.</li><li><code>CommandTimeout</code> : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.</li></ul>    



## Category
Accessing data
