---
title: Table.RemoveColumns
---

# Table.RemoveColumns


지정한 열을 제거합니다.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

제공된 `columns`에서 지정한 `table`을(를) 제거합니다. 지정한 열이 없는 경우 `missingField` 선택적 매개 변수가 대안 동작(예: `MissingField.UseNull` 또는 `MissingField.Ignore`)을 지정하는 경우를 제외하고 오류가 발생합니다.


## Examples

### Example #1
테이블에서 \[Phone\] 열을 제거합니다.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2
테이블에서 존재하지 않는 열을 제거해 보세요.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
