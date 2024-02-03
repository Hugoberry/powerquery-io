---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

İlk sayı satırları atlanacak şekilde bir tablo döndürür.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

<code>table</code> tablosunun ilk belirtilen sayıda, <code>countOrCondition</code>, satırı içermeyen bir tablo döndürür.    Kaldırılan satır sayısı <code>countOrCondition</code> isteğe bağlı parametresine bağlıdır.    <ul>    <li> <code>countOrCondition</code> dahil edilmezse, yalnızca ilk satır kaldırılır. </li>    <li> <code>countOrCondition</code> bir sayı ise bu sayıda satır (üstten başlayarak) kaldırılır. </li>    <li> <code>countOrCondition</code> bir koşul ise koşulu sağlayan satırlar, herhangi bir satır koşulu sağlamayana kadar kaldırılır.</li>    </ul>


## Examples

### Example #1 
Tablonun ilk satırını kaldırır.
```powerquery
Table.RemoveFirstN(
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
Tablonun ilk iki satırını kaldırır.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Tabloda [CustomerID] &lt;=2 koşulunu sağlayan ilk satırları kaldırır.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
