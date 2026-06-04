---
title: DB2.Database
---

# DB2.Database


DB2 데이터베이스에서 사용 가능한 SQL 테이블과 뷰에 대한 테이블을 반환합니다.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`database`(이)라는 데이터베이스 인스턴스의 `server` 서버에 있는 Db2 데이터베이스에서 사용 가능한 SQL 테이블 및 뷰의 테이블을 반환합니다. 포트는 필요에 따라 콜론으로 구분된 서버로 지정할 수 있습니다. 선택적 레코드 매개 변수 `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

-   `CreateNavigationProperties` : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).
-   `NavigationPropertyNameGenerator` : 탐색 속성의 이름을 만드는 데 사용되는 함수입니다.
-   `Query` : 데이터를 검색하는 데 사용되는 원시 SQL 쿼리입니다. 쿼리를 통해 결과 집합이 여러 개 생성되면 첫 번째 결과 집합만 반환됩니다.
-   `CommandTimeout` : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.
-   `ConnectionTimeout` : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `HierarchicalNavigation` : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).
-   `Implementation` : 사용할 내부 데이터베이스 공급자 구현을 지정합니다. 유효한 값은 "IBM" 및 "Microsoft" 입니다.
-   `BinaryCodePage` : DB2 FOR BIT 이진 데이터를 문자열로 디코딩할 CCSID(코딩된 문자 집합 식별자) 번호입니다. Implementation = “Microsoft”에 적용됩니다. 변환(기본값)을 사용하지 않도록 설정하려면 0으로 설정합니다. 데이터베이스 인코딩을 기반으로 변환하려면 1로 설정합니다. 애플리케이션 인코딩으로 변환하려면 다른 CCSID 번호를 설정합니다.
-   `PackageCollection` : SQL 문을 처리하는 데 필요한 공유 패키지를 사용할 수 있도록 패키지 컬렉션의 문자열 값(기본값: " NULLID")을 지정합니다. Implementation = " Microsoft"에 적용됩니다.
-   `UseDb2ConnectGateway` : Db2 Connect 게이트웨이를 통해 연결을 설정하고 있는지 여부를 지정합니다. 구현 = "Microsoft"에 적용됩니다.

예를 들어 레코드 매개 변수는 \[option1 = value1, option2 = value2...\] 또는 \[Query = "select ..."\] 형식으로 지정됩니다.



## Category
Accessing data
