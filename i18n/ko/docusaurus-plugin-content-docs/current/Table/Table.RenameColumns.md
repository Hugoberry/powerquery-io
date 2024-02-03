---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

\{old, new} 형식의 이름 바꾸기를 적용합니다.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>table</code> 테이블의 열에 대해 지정된 이름 바꾸기를 수행합니다. 바꾸기 작업 <code>renames</code>은(는) 이전 열 이름과 새로운 열 이름이 목록에 제공된 두 값의 목록으로 구성됩니다.열이 없는 경우 선택적 매개 변수 <code>missingField</code>이(가) 대안(예: <code>MissingField.UseNull</code> 또는 <code>MissingField.Ignore</code>)을 지정하지 않으면 예외가 발생합니다.


## Examples

### Example #1 
테이블에서 열 이름 &#34;CustomerNum&#34;을 &#34;CustomerID&#34;로 바꿉니다.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
테이블에서 열 이름 &#34;CustomerNum&#34;을 &#34;CustomerID&#34;로 바꾸고 &#34;PhoneNum&#34;을 &#34;Phone&#34;으로 바꿉니다.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
테이블에서 열 이름 &#34;NewCol&#34;을 &#34;NewColumn&#34;으로 바꾸고, 열이 없는 경우 무시합니다.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
