---
title: Table.LastN
---

# Table.LastN


지정된 개수에 따라 마지막 몇 개의 행을 반환합니다.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

`countOrCondition` 값에 따라 `table` 테이블의 마지막 행을 반환합니다.

-   `countOrCondition`이(가) 숫자인 경우 (끝 - `countOrCondition`) 위치에서부터 해당 개수만큼의 행이 반환됩니다.
-   `countOrCondition`이(가) 조건인 경우 행이 조건을 충족하지 않을 때까지 해당 조건을 충족하는 행이 위치의 오름차순으로 반환됩니다.


## Examples

### Example #1
테이블의 마지막 두 개 행을 찾습니다.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
테이블에서 \[a\] > 0인 마지막 몇 개의 행을 찾습니다.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
