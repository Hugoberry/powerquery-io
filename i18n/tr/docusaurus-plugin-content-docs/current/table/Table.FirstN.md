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

<code>countOrCondition</code> değerine bağlı olarak <code>table</code> tablosunun ilk satırlarını döndürür:    <ul>    <li> <code>countOrCondition</code> bir sayı ise, bu sayıda satır (üstten başlayarak) döndürülür. </li>    <li> <code>countOrCondition</code> bir koşul ise, koşulu sağlayan satırlar herhangi bir satırı koşulu sağlamayana kadar döndürülür.</li></ul>


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
Tabloda [a] &gt; 0 koşulunu sağlayan ilk satırları bulur.
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
