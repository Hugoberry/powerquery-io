---
title: Table.SingleRow
---

# Table.SingleRow


테이블의 행 하나를 반환합니다.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

단일 `table` 행의 행 하나를 반환합니다. `table`에 행이 두 개 이상 있으면 오류가 발생합니다.


## Examples

### Example #1
테이블의 단일 행을 반환합니다.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
