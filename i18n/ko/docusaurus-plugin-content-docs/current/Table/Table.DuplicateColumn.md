---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

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


## Details

테이블 <code>table</code>에 이름이 <code>columnName</code>인 열을 복제합니다. <code>newColumnName</code> 열의 값과 형식은 <code>columnName</code> 열에서 복사됩니다.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 테이블의 &#34;copied column&#34;이라는 열에 &#34;a&#34; 열을 복제합니다.
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
