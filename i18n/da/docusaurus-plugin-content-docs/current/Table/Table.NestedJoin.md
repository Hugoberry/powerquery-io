---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Udfører en joinforbindelse mellem tabeller på angivne kolonner og opretter joinresultatet i en ny kolonne.


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


## Details

Joinforbinder rækkerne i <code>table1</code> med rækkerne i <code>table2</code> på baggrund af ligheden mellem værdier i de nøglekolonner, der er valgt af <code>key1</code> (for <code>table1</code>) og <code>key2</code> (for <code>table2</code>). Resultaterne angives i den kolonne, der hedder <code>newColumnName</code>.<br />Den valgfrie værdi <code>joinKind</code> angiver typen af joinforbindelse, der skal udføres. Der udføres som standard en venstre ydre joinforbindelse, hvis der ikke er angivet en <code>joinKind</code>.<br />Et valgfrit sæt af <code>keyEqualityComparers</code> kan inkluderes for at angive, hvordan nøglekolonnerne skal sammenlignes. Denne funktion er i øjeblikket kun tiltænkt intern brug.<br />  


## Examples

### Example #1 
Forbind to tabeller ved hjælp af en enkelt nøglekolonne.
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
