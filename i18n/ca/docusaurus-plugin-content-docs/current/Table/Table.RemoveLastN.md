---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Retorna una taula amb les últimes files N suprimides.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Retorna una taula que no conté el primer les últimes <code>countOrCondition</code> files de la taula <code>table</code>.        El nombre de files suprimides depèn del paràmetre opcional <code>countOrCondition</code>.    <ul>    <li> Si s'omet <code>countOrCondition</code>, només se suprimeix l'última fila. </li>    <li> Si <code>countOrCondition</code> és un nombre, se suprimeix el mateix nombre de files (començant per baix). </li>    <li> Si <code>countOrCondition</code> és una condició, se suprimeixen les files que compleixin la condició fins que una no la compleixi.</li>    </ul>


## Examples

### Example #1 
Suprimeix la darrera fila de la taula.
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
Suprimeix les darreres files en què [CustomerID] &gt; 2 de la taula.
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
