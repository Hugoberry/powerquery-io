---
title: Sql.Database
---

# Sql.Database


SQL Server 데이터베이스의 SQL 테이블, 뷰 및 저장 함수에 대한 테이블을 반환합니다.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`database` 서버에 있는 SQL Server 데이터베이스 `server`의 SQL 테이블, 뷰 및 저장된 함수의 테이블을 반환합니다. 포트는 선택적으로 서버와 함께 지정할 수 있으며, 콜론 또는 쉼표로 구분합니다. 선택적 레코드 매개 변수 `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

-   `Query` : 데이터를 검색하는 데 사용되는 원시 SQL 쿼리입니다. 쿼리를 통해 결과 집합이 여러 개 생성되면 첫 번째 결과 집합만 반환됩니다.
-   `CreateNavigationProperties` : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).
-   `NavigationPropertyNameGenerator` : 탐색 속성의 이름을 만드는 데 사용되는 함수입니다.
-   `MaxDegreeOfParallelism` : 생성된 SQL 쿼리에 " maxdop” 쿼리 절의 값을 설정하는 숫자입니다.
-   `CommandTimeout` : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.
-   `ConnectionTimeout` : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `HierarchicalNavigation` : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).
-   `MultiSubnetFailover` : 연결 문자열에 "MultiSubnetFailover" 속성 값을 설정하는 논리(true/false)입니다(기본값은 false임).
-   `UnsafeTypeConversions` : True인 경우 실패할 수 있는 형식 변환을 폴딩하고 전체 쿼리가 실패하는 논리 값(true/false)입니다. 일반 용도로는 권장되지 않습니다.
-   `ContextInfo` : 각 명령을 실행하기 전에 CONTEXT\_INFO를 설정하는 데 사용되는 이진 값입니다.
-   `OmitSRID` : True인 경우 기하 도형 및 지리 유형에서 Well-Known Text를 생성할 때 SRID를 생략합니다.
-   `EnableCrossDatabaseFolding` : true인 경우 동일한 서버의 데이터베이스에서 쿼리 폴딩을 허용하는 논리적(true/false) 값입니다. 기본값은 false입니다.

예를 들어 레코드 매개 변수는 \[option1 = value1, option2 = value2...\] 또는 \[Query = "select ..."\] 형식으로 지정됩니다.



## Category
Accessing data
