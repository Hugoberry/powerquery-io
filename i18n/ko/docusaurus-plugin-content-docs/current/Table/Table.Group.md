---
title: Table.Group
---

# Table.Group


## Description

동일한 키가 있는 테이블의 행을 그룹화합니다.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

<code>table</code>에서 정의한 키 열을 기준으로 <code>key</code> 행을 그룹화 합니다. <code>key</code>은(는) 단일 열 이름이거나 열 이름 목록일 수 있습니다.    각 그룹에 대해 <code>aggregatedColumns</code>(으)로 지정된 집계 열과 함께 키 열 및 해당 값을 포함하는 레코드가 구성됩니다.    선택적으로 <code>groupKind</code> 및 <code>comparer</code>를 지정할 수 있습니다.<br />    <br />    키 열을 기준으로 데이터가 이미 정렬된 경우에는 GroupKind.Local의 <code>groupKind</code>이(가) 제공될 수 있습니다. 지정된 키 값 집합을 사용하는 모든 행이 연속적으로 간주되므로,    이는 특정한 경우에 그룹화의 성능을 개선할 수 있습니다.<br />    <br />    <code>comparer</code>을(를) 전달할 때 서로 다른 키를 동일하게 취급하면 행은 키가 자신의 키와 다른 그룹에 배치될 수 있습니다.<br />    <br />    이 함수는 반환하는 행의 순서를 보장하지 않습니다.  


## Examples

### Example #1 
가격의 합계(&#34;each List.Sum([price])&#34;)를 포함하는 집계 열 [total]을 추가하여 테이블을 그룹화합니다.
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
