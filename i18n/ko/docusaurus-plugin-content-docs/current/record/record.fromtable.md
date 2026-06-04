---
title: Record.FromTable
---

# Record.FromTable


\{\[Name = name, Value = value\]\} 형식의 테이블에서 레코드를 만듭니다.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

필드 이름 및 값 이름 `` `table` ``를 포함하는 \{\[Name = name, Value = value\]\} 레코드의 테이블에서 레코드를 반환합니다. 필드 이름이 고유하지 않으면 오류가 발생합니다.


## Examples

### Example #1
Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) 형식의 테이블에서 레코드를 만듭니다.
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
