---
title: Table.SplitColumn
---

# Table.SplitColumn


지정된 분할자 함수를 사용하여 지정된 열을 추가 열 집합으로 분할합니다.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

지정된 분할자 함수를 사용하여 지정된 열을 추가 열 집합으로 분할합니다.

-   `table`: 분할할 열이 포함된 테이블입니다.
-   `sourceColumn`: 분할할 열의 이름입니다.
-   `splitter`: 열을 분할하는 데 사용되는 분할기 함수입니다(예: `Splitter.SplitTextByDelimiter` 또는 `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: 만들 새 열 이름 목록 또는 새 열의 수입니다.
-   `default`: 분할 값이 부족하여 새 열을 모두 채울 수 없을 때 사용되는 값을 재정의합니다. 이 매개 변수의 기본값은 `null`입니다.
-   `extraColumns`: 새 열 수보다 분할 값이 더 많을 수 있는 경우 수행할 작업을 지정합니다. 이 매개 변수에 `ExtraValues.Type` 열거형 값을 전달할 수 있습니다. 기본값은 `ExtraValues.Ignore`입니다.


## Examples

### Example #1
이름 열을 이름과 성으로 분할합니다.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
이름 열을 이름과 성으로 분할한 다음 새 열의 이름을 바꿉니다.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
이름 열을 이름과 성으로 분할하고, 새 열의 이름을 바꾸고, 공백을 "-No Entry-"으로 채웁니다.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
이름 열을 이름과 성으로 분할한 다음 새 열의 이름을 바꿉니다. 사용 가능한 열 수보다 많은 값이 있을 수 있으므로 성 열을 이름 뒤에 있는 모든 값이 포함된 목록으로 만듭니다.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
