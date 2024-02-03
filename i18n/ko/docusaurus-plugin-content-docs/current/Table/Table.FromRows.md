---
title: Table.FromRows
---

# Table.FromRows


## Description

행 값 및 선택적인 열 목록으로 테이블을 만듭니다.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

<code>rows</code> 목록에서 해당 목록의 각 요소가 단일 행의 열 값을 포함하는 내부 목록인 테이블을 만듭니다. <code>columns</code>에 대해 열 이름 목록(옵션), 테이블 형식 또는 다수의 열이 제공될 수 있습니다.


## Examples

### Example #1 
값 \{1, 2}를 갖는 열 [CustomerID], 값 \{&#34;Bob&#34;, &#34;Jim&#34;}을 갖는 열 [Name] 및 값 \{&#34;123-4567&#34;, &#34;987-6543&#34;}을 갖는 열 [Phone]이 포함된 테이블을 반환합니다.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
값 \{1, 2}를 갖는 열 [CustomerID], 값 \{&#34;Bob&#34;, &#34;Jim&#34;}을 갖는 열 [Name] 및 값 \{&#34;123-4567&#34;, &#34;987-6543&#34;}을 갖는 열 [Phone]이 포함된 테이블을 반환합니다. 여기서 [CustomerID]는 숫자 형식이고, [Name] 및 [Phone]은 텍스트 형식입니다.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
