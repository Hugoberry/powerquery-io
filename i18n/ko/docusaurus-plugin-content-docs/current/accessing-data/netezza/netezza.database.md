---
title: Netezza.Database
---

# Netezza.Database


IBM Netezza 데이터베이스에서 데이터를 가져옵니다.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

서버 `server`의 Netezza Server 데이터베이스 `database`에서 Netezza 테이블, 뷰 및 저장 프로시저로 구성된 테이블을 반환합니다. 포트는 필요한 경우 콜론으로 구분하여 서버와 함께 지정할 수도 있습니다. 다음 옵션을 제어하도록 선택적 레코드 매개 변수 `options`를 지정할 수도 있습니다.

-   `CreateNavigationProperties`: 반환된 값에 대한 탐색 속성을 생성할지 여부를 설정하는 논리값(true/false)입니다(기본값은 true임).
-   `HierarchicalNavigation`: 해당 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리값(true/false)입니다(기본값은 false임).
-   `ConnectionTimeout`: 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 지속 시간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `CommandTimeout`: 서버 측 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 지속 시간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `NormalizeDatabaseName`: 데이터베이스 이름을 대문자로 일반화할지 또는 글자 그대로 해석할지를 설정하는 논리값(true/false)입니다(기본값은 true임).

레코드 매개 변수는 \[option1 = value1, option2 = value2...\]와 같이 지정됩니다.


## Examples

### Example #1
IBM Netezza 프로젝트의 테이블을 나열합니다.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



