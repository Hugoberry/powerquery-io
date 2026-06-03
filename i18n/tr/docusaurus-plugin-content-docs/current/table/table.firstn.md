---
title: Table.FirstN
---

# Table.FirstN


Belirtilen ilk sayı satırlarını döndürür.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

`countOrCondition` değerine bağlı olarak `table` tablosunun ilk satırlarını döndürür:

-   `countOrCondition` bir sayı ise, bu sayıda satır (üstten başlayarak) döndürülür.
-   `countOrCondition` bir koşul ise, koşulu sağlayan satırlar herhangi bir satırı koşulu sağlamayana kadar döndürülür.


## Examples

### Example #1
Tablonun ilk iki satırını bulur.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
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
Tabloda \[a\] > 0 koşulunu sağlayan ilk satırları bulur.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
