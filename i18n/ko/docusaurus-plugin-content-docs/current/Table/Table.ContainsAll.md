---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

지정된 모든 레코드가 테이블에 행으로 나타나는지 여부를 나타냅니다.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

레코드 목록 <code>rows</code>에서 지정된 모든 레코드가 <code>table</code>에 행으로 나타나는지 여부를 나타냅니다.    선택적 매개 변수 <code>equationCriteria</code>을(를) 지정하여 테이블 행 간의 비교를 제어할 수 있습니다.


## Examples

### Example #1 
테이블에 [CustomerID] 열만 비교하여 모든 행이 포함되어 있는지 여부를 확인합니다.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
테이블에 모든 행이 포함되어 있는지 여부를 확인합니다.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
