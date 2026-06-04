---
title: Sql.Databases
---

# Sql.Databases


SQL Server의 데이터베이스를 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

지정한 SQL Server `server`의 데이터베이스 테이블을 반환합니다. 선택적 레코드 매개 변수 `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

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

레코드 매개 변수는 예를 들어 \[option1 = value1, option2 = value2...\] 형식으로 지정됩니다.  
  
서버에서 실행할 SQL 쿼리 설정을 지원하지 않습니다. SQL 쿼리를 실행하려면 대신 `Sql.Database`를 사용해야 합니다.



## Category
Accessing data
