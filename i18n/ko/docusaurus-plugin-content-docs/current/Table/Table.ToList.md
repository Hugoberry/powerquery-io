---
title: Table.ToList
---

# Table.ToList


## Description

테이블의 값 행에 각각 지정한 결합 함수를 적용하여 테이블을 목록으로 변환합니다.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

테이블의 값 행에 각각 지정한 결합 함수를 적용하여 테이블을 목록으로 변환합니다.


## Examples

### Example #1 
각 행의 텍스트를 쉼표로 결합합니다.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
