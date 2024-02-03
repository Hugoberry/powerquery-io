---
title: MySQL.Database
---

# MySQL.Database


## Description

MySQL 데이터베이스에서 사용 가능한 SQL 테이블, 뷰 및 저장 스칼라 함수에 대한 테이블을 반환합니다.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

이름이 <code>database</code>인 데이터베이스 인스턴스의 <code>server</code> 서버에 있는 MySQL 데이터베이스에서 사용 가능한 SQL 테이블, 뷰 및 저장 스칼라 함수에 대한 테이블을 반환합니다. 포트에는 콜론으로 구분된 서버가 선택적으로 지정될 수 있습니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 지정하여 다음 옵션을 제어할 수 있습니다.    <ul><li><code>Encoding</code> : 서버에 전송하는 모든 쿼리를 인코딩하는 데 사용되는 문자 집합을 지정하는 TextEncoding 값(기본값: null)입니다.</li><li><code>CreateNavigationProperties</code> : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).</li><li><code>NavigationPropertyNameGenerator</code> : 탐색 속성의 이름을 만드는 데 사용되는 함수입니다.</li><li><code>Query</code> : 데이터를 검색하는 데 사용되는 원시 SQL 쿼리입니다. 쿼리를 통해 결과 집합이 여러 개 생성되면 첫 번째 결과 집합만 반환됩니다.</li><li><code>CommandTimeout</code> : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.</li><li><code>ConnectionTimeout</code> : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.</li><li><code>TreatTinyAsBoolean</code> : 서버에서 tinyint 열을 논리값으로 강제 적용할지 여부를 결정하는 논리(true/false)입니다. 기본값은 true입니다.</li><li><code>OldGuids</code> : char(36) 열(false인 경우)을 GUID로 처리할지, binary(16) 열(true인 경우)을 GUID로 처리할지를 설정하는 논리(true/false)입니다. 기본값은 false입니다.</li><li><code>ReturnSingleDatabase</code> : 모든 데이터베이스의 모든 테이블을 반환할지(false일 경우) 또는 지정된 데이터베이스의 테이블 및 뷰를 반환할지(true일 경우)를 설정하는 논리(true/false)입니다. 기본값은 false입니다.</li><li><code>HierarchicalNavigation</code> : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).</li></ul>    예를 들어, 레코드 매개 변수는 [option1 = value1, option2 = value2...] 또는 [Query = "select ..."] 형식으로 지정됩니다.    



## Category
Accessing data
