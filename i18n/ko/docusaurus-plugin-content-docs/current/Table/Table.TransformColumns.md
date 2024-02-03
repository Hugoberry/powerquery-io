---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

하나 이상의 열 값을 변환합니다.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>table</code>에 나열된 각 열의 작업을 적용하여 <code>transformOperations</code>을(를) 변환합니다(여기서 형식은 \{ column name, transformation } 또는 \{ column name, transformation, new column type }입니다).    <code>defaultTransformation</code>이(가) 지정되는 경우 <code>transformOperations</code>에 나열되지 않은 모든 열에 적용됩니다.    <code>transformOperations</code>에 나열된 열이 존재하지 않는 경우 선택적 매개 변수 <code>missingField</code>이(가) 대안(예: <code>MissingField.UseNull</code> 또는 <code>MissingField.Ignore</code>)을 지정하지 않는 한 예외가 발생합니다.


## Examples

### Example #1 
[A] 열의 텍스트 값은 숫자 값으로 변환하고 [B] 열의 숫자 값은 텍스트 값으로 변환합니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
누락된 [X] 열의 숫자 값을 텍스트 값으로 변환하고 존재하지 않는 열은 무시합니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
누락된 [X] 열의 숫자 값을 텍스트 값으로 변환하고, 존재하지 않는 열은 기본값인 null로 설정합니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
[B] 열의 숫자 값을 증가시켜 텍스트 값으로 변환하고 다른 모든 열을 숫자로 변환합니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
