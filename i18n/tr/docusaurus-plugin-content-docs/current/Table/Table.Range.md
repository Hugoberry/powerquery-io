---
title: Table.Range
---

# Table.Range


## Description

Belirtilen uzaklıkta başlayan satırları döndürür.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

<code>table</code> öğesinden belirtilen <code>offset</code> konumunda başlayan satırları döndürür. <code>count</code> isteğe bağlı parametresi, döndürülecek satır sayısını belirtir. Varsayılan olarak, uzaklıktan sonraki tüm satırlar döndürülür.


## Examples

### Example #1 
Tablodaki 1 uzaklığından başlayarak tüm satırları döndürür.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Tablodaki 1 uzaklığından başlayarak bir satır döndürür.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
