---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Returnerer en tabel, hvor de sidste N rækker er fjernet.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Returnerer en tabel, der ikke indeholder de sidste <code>countOrCondition</code> rækker i tabellen <code>table</code>.        Det antal rækker, der fjernes, afhænger af den valgfrie parameter <code>countOrCondition</code>.    <ul>    <li> Hvis <code>countOrCondition</code> udelades, er det kun sidste række, der fjernes. </li>    <li> Hvis <code>countOrCondition</code> er et tal, fjernes der så mange rækker (med start fra bunden). </li>    <li> Hvis <code>countOrCondition</code> er en betingelse, fjernes de rækker, der overholder betingelsen, indtil en række ikke overholder betingelsen.</li>    </ul>


## Examples

### Example #1 
Fjern den sidste række i tabellen.
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
Fjern de sidste to rækker i tabellen, hvor [CustomerID] &gt; 2.
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
