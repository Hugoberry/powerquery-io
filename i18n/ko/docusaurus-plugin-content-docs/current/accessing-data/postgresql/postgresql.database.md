---
title: PostgreSQL.Database
---

# PostgreSQL.Database


PostgreSQL 데이터베이스에서 사용 가능한 SQL 테이블과 뷰에 대한 테이블을 반환합니다.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`database`(이)라는 데이터베이스 인스턴스의 `server` 서버에 있는 PostgreSQL 데이터베이스에서 사용 가능한 SQL 테이블과 뷰의 테이블을 반환합니다. 포트는 필요에 따라 콜론으로 구분된 서버로 지정할 수 있습니다. 선택적 레코드 매개 변수 `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

-   `CreateNavigationProperties` : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).
-   `NavigationPropertyNameGenerator` : 탐색 속성의 이름을 만드는 데 사용되는 함수입니다.
-   `Query` : 데이터를 검색하는 데 사용되는 원시 SQL 쿼리입니다. 쿼리를 통해 결과 집합이 여러 개 생성되면 첫 번째 결과 집합만 반환됩니다.
-   `CommandTimeout` : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.
-   `ConnectionTimeout` : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `HierarchicalNavigation` : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).

예를 들어 레코드 매개 변수는 \[option1 = value1, option2 = value2...\] 또는 \[Query = "select ..."\] 형식으로 지정됩니다.



## Category
Accessing data
