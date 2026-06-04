---
title: List.Positions
---

# List.Positions


입력에 대한 오프셋의 목록을 반환합니다.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

지정된 입력 목록에 대한 오프셋 목록을 반환합니다.

-   `list`: 입력 목록.

`List.Transform`을 사용하여 목록을 변경하는 경우 위치 목록을 사용하여 위치에 대한 변환 액세스 권한을 부여할 수 있습니다.


## Examples

### Example #1
\{1, 2, 3, 4, null, 5\} 목록에 있는 값의 오프셋을 확인합니다.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
목록에서 고객 위치를 기준으로 각 고객에게 ID를 할당하는 테이블을 만드세요.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
