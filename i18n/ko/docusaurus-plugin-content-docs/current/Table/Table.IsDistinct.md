---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

테이블에 중복되지 않은 고유 행만 포함되어 있는지 여부를 나타냅니다.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

<code>table</code>에 중복되지 않은 고유 행만 포함되어 있는지 여부를 나타냅니다. 행이 고유하면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.    선택적 매개 변수 <code>comparisonCriteria</code>은(는) 중복 여부를 테스트할 테이블의 열을 지정합니다. <code>comparisonCriteria</code>을(를) 지정하지 않으면 모든 열이 테스트됩니다.


## Examples

### Example #1 
테이블이 고유한지 여부를 확인합니다.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
테이블이 열에서 고유한지 여부를 확인합니다.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
