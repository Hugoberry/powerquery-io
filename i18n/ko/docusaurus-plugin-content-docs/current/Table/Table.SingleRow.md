---
title: Table.SingleRow
---

# Table.SingleRow


## Description

테이블의 행 하나를 반환합니다.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

단일 <code>table</code> 행의 행 하나를 반환합니다. <code>table</code>에 행이 둘 이상 있으면 예외가 발생합니다.


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
