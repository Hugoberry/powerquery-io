---
title: Table.NestedJoin
---

# Table.NestedJoin


지정된 열에서 테이블 간 조인을 수행하고 조인 결과를 새 열에 생성합니다.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

`key1`(`table1`의 경우) 및 `key2`(`table2`의 경우)(으)로 선택된 키 열의 값이 같은지 여부에 따라 `table1`의 행과 `table2`의 행을 조인합니다. 결과는 이름이 `newColumnName`인 열에 입력됩니다.

선택적 `joinKind`은(는) 수행할 조인의 종류를 지정합니다. 기본적으로 `joinKind`을(를) 지정하지 않으면 왼쪽 우선 외부 조인이 수행됩니다.

키 열을 비교하는 방법을 지정하는 데 `keyEqualityComparers`의 선택적 집합이 포함될 수 있습니다. 이 기능은 현재 내부에서만 사용하도록 제공됩니다.


## Examples

### Example #1
단일 키 열을 사용하여 두 테이블을 조인합니다.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
