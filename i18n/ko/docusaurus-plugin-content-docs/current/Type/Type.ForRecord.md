---
title: Type.ForRecord
---

# Type.ForRecord


## Description

필드에 대한 특정 형식 제약 조건을 가진 레코드를 나타내는 형식을 반환합니다.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

필드에 대한 특정 형식 제약 조건을 가진 레코드를 나타내는 형식을 반환합니다.


## Examples

### Example #1 
테이블 형식을 동적으로 생성합니다.
```powerquery
let
    columnNames = {"Name", "Score"},
    columnTypes = {type text, type number},
    rowColumnTypes = List.Transform(columnTypes, (t) => [Type = t, Optional = false]),
    rowType = Type.ForRecord(Record.FromList(rowColumnTypes, columnNames), false)
in
    #table(type table rowType, {{"Betty", 90.3}, {"Carl", 89.5}})
```

Result: 
```powerquery
#table(
    type table [Name = text, Score = number],
    {{"Betty", 90.3}, {"Carl", 89.5}}
)
```




## Category
Type
