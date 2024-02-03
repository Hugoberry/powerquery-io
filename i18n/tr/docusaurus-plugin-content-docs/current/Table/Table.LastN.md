---
title: Table.LastN
---

# Table.LastN


## Description

Son belirtilen satır sayısını döndürür.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

<code>countOrCondition</code> değerine bağlı olarak <code>table</code> tablosunun sonra satırlarını döndürür:    <ul>    <li> <code>countOrCondition</code> bir sayı ise, bu sayıda satır ((end - <code>countOrCondition</code>) konumundan başlayarak) döndürülür. </li>    <li> <code>countOrCondition</code> bir koşul ise, koşulu sağlayan satırlar artan konumda herhangi bir satırı koşulu sağlamayana kadar döndürülür.</li></ul>


## Examples

### Example #1 
Tablonun son iki satırını bulur.
```powerquery
Table.LastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Tabloda [a] &gt; 0 koşulunu sağlayan son satırları bulur.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
