---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Smartsheet 인덱스 엔드포인트의 데이터 테이블을 반환합니다.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

지정된 엔드포인트에서 Smartsheet 2.0 REST API를 호출하고 테이블에 반환된 데이터 요소를 변환합니다.


## Examples

### Example #1 
Smartsheet API의 사용자 정보 테이블을 가져옵니다.
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Smartsheet API에서 반환된 대로 사용자 정보가 있는 테이블
```



