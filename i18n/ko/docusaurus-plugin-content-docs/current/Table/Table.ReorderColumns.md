---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

지정한 순서대로 열이 포함된 테이블을 반환합니다.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>columnOrder</code>에 지정된 순서대로 <code>table</code> 입력의 열이 포함된 테이블을 반환합니다. 목록에 지정되지 않은 열은 다시 정렬되지 않습니다.     열이 없는 경우 선택적 매개 변수 <code>missingField</code>이(가) 대안(예: <code>MissingField.UseNull</code> 또는 <code>MissingField.Ignore</code>)을 지정하지 않으면 예외가 발생합니다.


## Examples

### Example #1 
테이블에서 [Phone] 및 [Name] 열의 순서를 전환합니다.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
테이블에서 [Phone] 및 [Address] 열의 순서를 전환하거나 &#34;MissingField.Ignore&#34;를 사용합니다. 열 [Address]가 없으므로 테이블이 변경되지 않습니다.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
