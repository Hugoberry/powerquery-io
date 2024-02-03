---
title: Record.RenameFields
---

# Record.RenameFields


## Description

\{ old, new } 형식의 목록에서 이름 바꾸기를 적용합니다.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

입력 <code>record</code>의 필드를 목록 <code>renames</code>에 지정된 새 필드 이름으로 바꾼 후 레코드를 반환합니다. 여러 개의 이름을 바꾸려면 중첩된 목록(\{ \{old1, new1}, \{old2, new2} }을 사용합니다.


## Examples

### Example #1 
레코드에서 필드 &#34;UnitPrice&#34;의 이름을 &#34;Price&#34;로 바꿉니다.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
레코드에서 필드 &#34;UnitPrice&#34;의 이름을 &#34;Price&#34;로 바꾸고 &#34;OrderNum&#34;의 이름을 &#34;OrderID&#34;로 바꿉니다.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
