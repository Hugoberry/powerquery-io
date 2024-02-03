---
title: Record.FromTable
---

# Record.FromTable


## Description

\{[Name = name, Value = value]} 형식의 테이블에서 레코드를 만듭니다.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

필드 이름 및 값 이름 <code>\{[Name = name, Value = value]}</code>를 포함하는 <code>table</code> 레코드의 테이블에서 레코드를 반환합니다. 필드 이름이 고유하지 않으면 예외가 발생합니다.


## Examples

### Example #1 
Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) 형식의 테이블에서 레코드를 만듭니다.
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
