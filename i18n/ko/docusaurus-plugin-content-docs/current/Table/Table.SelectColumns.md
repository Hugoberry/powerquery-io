---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

지정한 열만 포함된 테이블을 반환합니다.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

지정한 <code>columns</code>만 포함된 <code>table</code>을(를) 반환합니다.    <ul>       <li><code>table</code>: 제공된 테이블입니다.</li>       <li><code>columns</code>: 반환할 <code>table</code> 테이블의 열 목록입니다. 반환된 테이블의 열은 <code>columns</code>에 나열된 순서대로 표시됩니다.</li>       <li><code>missingField</code>: <i>(옵션)</i> 열이 없는 경우 수행할 작업입니다. 예: <code>MissingField.UseNull</code> 또는 <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
[Name] 열만 포함합니다.
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
[CustomerID] 및 [Name] 열만 포함합니다.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
포함된 열이 종료되지 않는 경우 기본 결과는 오류입니다.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
포함된 열이 종료되지 않는 경우 &lt;code&gt;MissingField.UseNull&lt;/code&gt; 옵션은 값이 null인 열을 만듭니다.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
