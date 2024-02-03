---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Smartsheet API의 시트, 보고서, 폴더 및 작업 영역 테이블을 반환합니다.


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Smartsheet API의 사용 가능 시트, 보고서, 폴더 및 작업 영역에 대한 중첩된 테이블을 반환합니다.


## Examples

### Example #1 
Smartsheet 계층의 최상위 수준에서 사용할 수 있는 시트, 폴더, 보고서 및 작업 영역을 반환합니다.
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
최상위 Smartsheet 계층의 폴더, 보고서 및 작업 영역 테이블
```



