---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Adobe Analytics의 보고서 모음을 반환합니다.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Adobe Analyics에서 다차원 패키지 테이블을 반환합니다. 선택적 레코드 매개 변수 `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

-   `HierarchicalNavigation` : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).
-   `MaxRetryCount` : 쿼리 결과를 폴링할 때 수행할 재시도 횟수입니다. 기본값은 120입니다.
-   `RetryInterval` : 재시도 간의 지속 시간입니다. 기본값은 1초입니다.
-   `Implementation` : Adobe Analytics API 버전을 지정합니다. 유효한 값은 "2.0"입니다. 기본값은 API 버전 1.4를 사용합니다.



## Category
Accessing data
