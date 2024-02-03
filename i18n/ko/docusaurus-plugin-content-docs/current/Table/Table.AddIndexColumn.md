---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


## Description

명시적 위치 값을 사용하여 열을 추가합니다.


## Syntax

```powerquery
Table.AddIndexColumn(
    table as table,
    newColumnName as text,
    optional initialValue as number,
    optional increment as number,
    optional columnType as type
) as table
```


## Details

<code>table</code>에 명시적 위치 값을 사용하여 이름이 <code>newColumnName</code>인 열을 추가합니다.    선택적 값 <code>initialValue</code>은(는) 초기 인덱스 값을 지정합니다. 선택적 값 <code>increment</code>은(는) 각 인덱스 값이 증가하는 양을 지정합니다.


## Examples

### Example #1 
테이블에 이름이 &#34;Index&#34;인 인덱스 열을 추가합니다.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 0],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 1],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 2],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 3]
})
```


### Example #2 
테이블에 값 10부터 시작하고 5씩 증가하는 &#34;index&#34;라는 인덱스 열을 추가합니다.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index",
    10,
    5
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 10],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 15],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 20],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 25]
})
```




## Category
Table.Transformation
