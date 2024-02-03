---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

초기 오프셋을 유지한 후 다음 행을 교대로 가져오고 건너뜁니다.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

초기 오프셋을 유지한 후 다음 행을 교대로 가져오고 건너뜁니다.    <ul>       <li><code>table</code>: 입력 테이블입니다.</li>       <li><code>offset</code>: 반복을 시작하기 전에 유지할 행 수입니다.</li>       <li><code>skip</code>: 각 반복에서 제거할 행 수입니다.</li>       <li><code>take</code>: 각 반복에서 유지할 행 수입니다.</li>    </ul>    


## Examples

### Example #1 
테이블의 첫 번째 행에서 시작하여 1개의 값을 건너뛴 후 1개의 값을 유지하는 테이블을 반환합니다.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
