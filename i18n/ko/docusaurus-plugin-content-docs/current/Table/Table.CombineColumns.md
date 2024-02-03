---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

지정된 결합 함수를 사용하여 지정된 열을 새 열에 결합합니다.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Details

지정된 결합 함수를 사용하여 지정된 열을 새 열에 결합합니다.


## Examples

### Example #1 
마지막 이름과 이름을 쉼표로 구분하여 새 열로 결합합니다.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
