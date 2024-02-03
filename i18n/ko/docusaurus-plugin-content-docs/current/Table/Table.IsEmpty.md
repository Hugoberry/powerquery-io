---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

테이블에 행이 포함되어 있는지 여부를 나타냅니다.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

<code>table</code>에 행이 포함되어 있는지 여부를 나타냅니다. 행이 없으면(테이블이 비어 있는 경우) <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


## Examples

### Example #1 
테이블이 비어 있는지 여부를 확인합니다.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;(\{})&lt;/code&gt; 테이블이 비어 있는지 여부를 확인합니다.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
