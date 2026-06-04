---
title: OleDb.DataSource
---

# OleDb.DataSource


OLE DB 데이터 원본에서 SQL 테이블 및 뷰로 구성된 테이블을 반환합니다.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

연결 문자열 `connectionString`(으)로 지정된 OLE DB 데이터 원본의 SQL 테이블 및 뷰의 테이블을 반환합니다. `connectionString`은(는) 텍스트 또는 속성 값 쌍의 레코드일 수 있습니다. 속성 값은 텍스트 또는 숫자일 수 있습니다. 추가 속성을 지정하기 위해 선택적 레코드 매개 변수인 `options`을(를) 제공할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.

-   `CreateNavigationProperties` : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).
-   `NavigationPropertyNameGenerator` : 탐색 속성의 이름을 만드는 데 사용되는 함수입니다.
-   `Query` : 데이터를 검색하는 데 사용되는 원시 SQL 쿼리입니다. 쿼리를 통해 결과 집합이 여러 개 생성되면 첫 번째 결과 집합만 반환됩니다.
-   `HierarchicalNavigation` : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).
-   `ConnectionTimeout` : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `CommandTimeout` : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.
-   `SqlCompatibleWindowsAuth` : Windows 인증에 사용할 SQL Server 호환 연결 문자열 옵션을 생성할지 여부를 결정하는 논리값(true/false)입니다. 기본값은 true입니다.

예를 들어 레코드 매개 변수는 \[option1 = value1, option2 = value2...\] 또는 \[Query = "select ..."\] 형식으로 지정됩니다.



## Category
Accessing data
