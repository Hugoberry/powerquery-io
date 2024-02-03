---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Son N satırları kaldıran bir tablo döndürür.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

<code>table</code> tablosunun son <code>countOrCondition</code> satırını içermeyen bir tablo döndürür.        Kaldırılan satır sayısı <code>countOrCondition</code> isteğe bağlı parametresine bağlıdır.    <ul>    <li> <code>countOrCondition</code> dahil edilmezse yalnızca son satır kaldırılır. </li>    <li> <code>countOrCondition</code> bir sayı ise bu sayıda satır (alttan başlayarak) kaldırılır. </li>    <li> <code>countOrCondition</code> bir koşul ise koşulu sağlayan satırlar, herhangi bir satır koşulu sağlamayana kadar kaldırılır.</li>    </ul>


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
Tabloda [CustomerID] &gt; 2 koşulunu sağlayan son satırları kaldırır.
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
