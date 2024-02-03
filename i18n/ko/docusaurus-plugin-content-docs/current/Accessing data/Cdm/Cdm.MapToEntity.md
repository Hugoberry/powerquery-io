---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

데이터 형식을 포함하여 Common Data Model의 엔터티 특성에 매핑된 열이 포함된 테이블을 반환합니다.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

데이터 형식을 포함하여 Common Data Model의 엔터티 특성에 매핑된 열이 포함된 테이블을 반환합니다. 매핑되지 않은 경우 엔터티 정의의 열이 추가되고, 매핑되지 않은 열은 제거됩니다.


