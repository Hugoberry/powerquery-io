---
title: Table.InsertRows
---

# Table.InsertRows


## Description

Bir tabloya belirtilen konumda bir satır listesi ekler.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Details

<code>rows</code> verilen konumunda <code>table</code> içine eklenen <code>offset</code> satır listesini içeren bir tablo döndürür. Eklenecek satırdaki her sütun, tablonun sütun türleri ile eşleşmelidir.


## Examples

### Example #1 
Satırı 1 konumunda bulunan tabloya ekler.
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
1 konumunda bulunan tabloya iki satır ekler.
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
