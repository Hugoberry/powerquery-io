---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

지정된 열에서 테이블 간 조인을 수행하고 조인 결과를 새 열에 생성합니다.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Details

<code>key1</code>(<code>table1</code>의 경우) 및 <code>key2</code>(<code>table2</code>의 경우)로 선택된 키 열의 값이 같은지 여부에 따라 <code>table1</code>의 행과 <code>table2</code>의 행을 조인합니다. 결과는 이름이 <code>newColumnName</code>인 열에 입력됩니다.이 함수는 조인 결과가 플랫 방식 대신 중첩 방식으로 표시된다는 점을 제외하고 JoinKind가 LeftOuter인 Table.Join과 유사하게 동작합니다.


## Examples

### Example #1 
[saleID]에서 조인된 (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) 테이블의 &#34;price/stock&#34;이라는 (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]})에 조인 열을 추가합니다.
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
