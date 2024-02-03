---
title: Table.FindText
---

# Table.FindText


## Description

테이블에서 지정된 텍스트를 포함하는 모든 행을 반환합니다.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

<code>table</code> 테이블에서 텍스트 <code>text</code>을(를) 포함하는 행을 반환합니다. 텍스트를 찾을 수 없으면 빈 테이블이 반환됩니다.


## Examples

### Example #1 
테이블에서 &#34;Bob&#34;를 포함하는 행을 찾습니다.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
