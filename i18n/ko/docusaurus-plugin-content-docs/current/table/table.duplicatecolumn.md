---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


열을 지정된 이름으로 복제합니다. 값과 형식은 원본 열에서 복사됩니다.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

테이블 `columnName`에 이름이 `table`인 열을 복제합니다. `newColumnName` 열의 값과 형식은 `columnName` 열에서 복사됩니다.


## Examples

### Example #1
`({[a = 1, b = 2], [a = 3, b = 4]})` 테이블의 "copied column"이라는 열에 "a" 열을 복제합니다.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
