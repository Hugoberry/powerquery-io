---
title: Table.AddKey
---

# Table.AddKey


## Description

지정된 테이블 형식에 키를 추가합니다.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

<code>table</code>에 키를 추가합니다. 여기서 <code>columns</code>은(는) 키를 정의하는 열 이름 목록이고 <code>isPrimary</code>은(는) 키가 기본인지 여부를 지정합니다.


## Examples

### Example #1 
단일 열 기본 키를 테이블에 추가합니다.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
