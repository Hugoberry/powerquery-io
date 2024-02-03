---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


## Description

Açık konum değerlerine sahip bir sütun ekler.


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

<code>newColumnName</code> adlı bir sütunu, <code>table</code> öğesine açık konum değerleri ile ekler.    <code>initialValue</code> isteğe bağlı değeri ilk dizin değerini belirtir. <code>increment</code> isteğe bağlı değeri, her dizin değerinin ne kadar artırılacağını belirtir.


## Examples

### Example #1 
Tabloya &#34;Index&#34; adlı bir dizin sütunu ekler.
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
Tabloya, 10 değeri ile başlayarak 5&#39;er 5&#39;er artacak şekilde &#34;index&#34; adlı bir dizin sütunu ekler.
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
