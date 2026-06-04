---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


테이블 열을 포함 테이블의 여러 열에 집계합니다.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

`table`\[`column`\]의 테이블을 테이블의 집계 값을 포함하는 여러 열에 집계합니다. `aggregations`을(를) 사용하여 집계할 테이블, 해당 값을 생성하기 위해 테이블에 적용할 집계 함수, 그리고 만들 집계 열의 이름을 포함하는 열을 지정합니다.


## Examples

### Example #1
`{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` 테이블에 있는 `[t]`의 테이블 열을 `[t.a]`의 합계, `[t.b]`의 최소값과 최대값 및 `[t.a]`의 값 개수로 집계합니다.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
