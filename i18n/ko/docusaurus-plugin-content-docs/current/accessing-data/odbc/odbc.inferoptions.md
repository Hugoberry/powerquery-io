---
title: Odbc.InferOptions
---

# Odbc.InferOptions


ODBC 드라이버에 대한 SQL 기능을 유추한 결과를 반환합니다.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

ODBC를 사용하여 연결 문자열 `connectionString`(으)로 SQL 기능을 유추한 결과를 반환합니다. `connectionString`은(는) 속성 값 쌍의 레코드 또는 텍스트일 수 있습니다. 속성 값은 텍스트나 숫자일 수 있습니다.


## Examples

### Example #1
연결 문자열에 대해 유추된 SQL 기능을 반환합니다.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
