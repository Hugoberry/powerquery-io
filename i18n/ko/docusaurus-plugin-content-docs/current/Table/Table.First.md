---
title: Table.First
---

# Table.First


## Description

첫 번째 행이나 지정된 기본값을 반환합니다.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

<code>table</code>의 첫 번째 행을 반환하거나, 테이블이 비어 있는 경우 선택적 기본값인 <code>default</code>을(를) 반환합니다.


## Examples

### Example #1 
테이블의 첫 번째 행을 찾습니다.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
&lt;code&gt;(\{})&lt;/code&gt; 테이블의 첫 번째 행을 찾거나, 테이블이 비어 있는 경우 [a = 0, b = 0]을 반환합니다.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
