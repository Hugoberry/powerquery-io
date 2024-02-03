---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

테이블의 대략적 행 개수를 반환합니다.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

<code>table</code>의 대략적인 행 수를 반환하거나 데이터 소스가 근사치를 지원하지 않는 경우 오류를 반환합니다.


## Examples

### Example #1 
열에 대한 카디널리티 추정치로 사용할 수 있는 큰 테이블에서 도시 및 주의 고유한 조합 수를 추정합니다. 카디널리티 추정치는 SQL Server와 같은 다양한 데이터 원본이 종종 HyperLogLog라는 알고리즘을 사용하여 이 특정 근사치를 지원하도록 충분히 중요합니다.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
