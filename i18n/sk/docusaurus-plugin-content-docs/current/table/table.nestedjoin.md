---
title: Table.NestedJoin
---

# Table.NestedJoin


Vykoná spojenie medzi tabuľkami na zadaných stĺpcoch a vytvorí výsledok spojenia v novom stĺpci.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Spojí riadky tabuľky `table1` s riadkami tabuľky `table2` na základe rovnosti hodnôt kľúčových stĺpcov vybratých pomocou funkcie `key1` (pre tabuľku `table1`) a `key2` (pre tabuľku `table2`). Výsledky sa zadajú do stĺpca s názvom `newColumnName`.

Voliteľná hodnota `joinKind` určuje typ spojenia, ktoré sa má vykonať. Ak sa nezadá konkrétna hodnota `joinKind`, predvolene sa vykoná vonkajšie spojenie zľava.

Možno zahrnúť voliteľnú súpravu `keyEqualityComparers` na určenie spôsobu porovnávania kľúčových stĺpcov. Táto funkcia je v súčasnosti určená iba na interné použitie.


## Examples

### Example #1
Spojí dve tabuľky pomocou jedného kľúčového stĺpca.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
