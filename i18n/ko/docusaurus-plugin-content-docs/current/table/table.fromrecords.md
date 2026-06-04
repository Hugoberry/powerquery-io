---
title: Table.FromRecords
---

# Table.FromRecords


레코드 목록을 테이블로 변환합니다.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

지정된 레코드 목록을 테이블로 변환합니다.

-   `records`: 테이블로 변환할 레코드 목록입니다.
-   `columns`: (선택 사항) 테이블의 열 이름 또는 테이블 형식의 목록입니다.
-   `missingField`: (선택 사항) 행에서 누락된 필드를 처리하는 방법을 지정합니다. 다음 값 중 하나를 사용합니다.
    -   `MissingField.Error`: 누락된 필드가 있으면 오류가 발생합니다(기본값).
    -   `MissingField.UseNull`: 누락된 필드는 `null` 값으로 포함됩니다.
      
    이 매개 변수에서 `MissingField.Ignore`를 사용하면 오류가 발생합니다.


## Examples

### Example #1
레코드 필드 이름을 열 이름으로 사용하여 레코드에서 테이블을 만듭니다.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
형식이 지정된 열이 있는 레코드에서 테이블을 만들고 숫자 열을 선택합니다.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
지정된 레코드에서 고객의 이름, 중간 이니셜 및 성을 포함하는 테이블을 만듭니다. 값이 누락된 경우에는 `null`로 대체하세요.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
