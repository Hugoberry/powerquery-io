---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


테이블의 목록 열이 지정된 경우 해당 목록의 각 값에 대해 복사본 행을 만듭니다.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

`column`에 값 목록이 포함된 `table`이(가) 주어지면 목록이 각 값의 행으로 분할됩니다. 다른 열의 값은 새로 만들어지는 각 행에서 중복됩니다. 이 함수는 중첩 테이블을 레코드 목록으로 처리하여 확장할 수도 있습니다.


## Examples

### Example #1
목록 열 \[Name\]을 분할합니다.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
중첩 테이블 열 \[Components\]를 분할합니다.
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
