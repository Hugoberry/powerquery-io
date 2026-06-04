---
title: Table.Profile
---

# Table.Profile


테이블 열의 프로필을 반환합니다.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

`table`에서 열에 대한 프로필을 반환합니다.

적용 가능한 경우 각 열에 대해 다음 정보가 반환됩니다.

-   최소
-   최대
-   평균
-   표준 편차
-   카운트
-   null 카운트
-   고유 카운트



## Category
Table.Information
