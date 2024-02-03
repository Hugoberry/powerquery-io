---
title: Table.Profile
---

# Table.Profile


## Description

테이블 열의 프로필을 반환합니다.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

<code>table</code>에서 열에 대한 프로필을 반환합니다.<br />적용 가능한 경우 각 열에 대해 다음 정보가 반환됩니다.<ul>  <li>최소</li>  <li>최대</li>  <li>평균</li>  <li>표준 편차</li>  <li>카운트</li>  <li>null 카운트</li>  <li>고유 카운트</li></ul><br />



## Category
Table.Information
