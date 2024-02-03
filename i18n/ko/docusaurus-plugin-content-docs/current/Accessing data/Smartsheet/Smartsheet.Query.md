---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Smartsheet API의 JSON 결과를 반환합니다.


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

지정한 엔드포인트에서 Smartsheet 2.0 REST API를 호출하고 JSON 레코드로 결과를 반환합니다.


## Examples

### Example #1 
추가 인수가 있는 Smartsheet API 엔드포인트가 지정된 시트에서 데이터를 가져옵니다.
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet API에서 반환된 시트 정보가 있는 테이블
```



