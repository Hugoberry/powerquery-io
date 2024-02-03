---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

지정된 형식과 일치하는 열의 이름이 포함된 목록을 반환합니다.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

<code>table</code> 테이블에서 <code>listOfTypes</code>에 지정된 형식과 일치하는 열의 이름이 포함된 목록을 반환합니다.


## Examples

### Example #1 
테이블에서 Number.Type 형식의 열 이름을 반환합니다.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
