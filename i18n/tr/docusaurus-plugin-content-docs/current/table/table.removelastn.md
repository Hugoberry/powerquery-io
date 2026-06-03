---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Son N satırları kaldıran bir tablo döndürür.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

`table` tablosunun son `countOrCondition` satırını içermeyen bir tablo döndürür. Kaldırılan satır sayısı `countOrCondition` isteğe bağlı parametresine bağlıdır.

-   `countOrCondition` dahil edilmezse yalnızca son satır kaldırılır.
-   `countOrCondition` bir sayı ise bu sayıda satır (alttan başlayarak) kaldırılır.
-   `countOrCondition` bir koşul ise koşulu sağlayan satırlar, herhangi bir satır koşulu sağlamayana kadar kaldırılır.


## Examples

### Example #1
Tablonun son satırını kaldırır.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Tabloda \[CustomerID\] > 2 koşulunu sağlayan son satırları kaldırır.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
