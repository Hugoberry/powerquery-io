---
title: Table.FromColumns
---

# Table.FromColumns


## Description

열 목록과 지정된 값에서 테이블을 만듭니다.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

열 이름 및 값을 사용하여 <code>lists</code> 목록에서 중첩 목록을 포함하는 <code>columns</code> 형식의 테이블을 만듭니다.    일부 열에 다른 열보다 많은 값이 있는 경우 해당 열이 Null을 허용하지 않으면 누락된 값이 기본값인 'Null'로 채워집니다.


## Examples

### Example #1 
목록에서 고객 이름 목록의 테이블을 반환합니다. 고객 목록 항목의 각 값은 행 값이 되고, 각 목록은 열이 됩니다.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
지정된 열 목록과 열 이름 목록에서 테이블을 만듭니다.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
행당 다른 열 수로 된 테이블을 만듭니다. 누락된 행 값은 null입니다.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
