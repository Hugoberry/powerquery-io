---
title: Table.Keys
---

# Table.Keys


## Description

지정된 테이블의 키를 반환합니다.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

지정된 테이블의 키를 반환합니다.


## Examples

### Example #1 
테이블의 키 목록을 가져옵니다.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
