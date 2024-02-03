---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Duu a terme una unió entre taules en columnes proporcionades i produeix el resultat de la unió en una columna nova.


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

Uneix les files de la taula <code>table1</code> amb les de la taula <code>table2</code> d'acord amb l'equivalència dels valors de les columnes clau seleccionats per les columnes <code>key1</code> (per a la taula <code>table1</code>) i <code>key2</code> (per a la taula <code>table2</code>). Els resultats s'introdueixen a la columna anomenada <code>newColumnName</code>.<br />El paràmetre opcional <code>joinKind</code> especifica el tipus d'unió que s'ha de dur a terme. Per defecte, es realitza una unió externa esquerra si no s'especifica el paràmetre <code>joinKind</code>.<br />S'hi pot incloure el conjunt opcional <code>keyEqualityComparers</code> per especificar com cal comparar les columnes clau. Actualment, aquesta característica només està destinada a l'ús intern.<br />  


## Examples

### Example #1 
Uniu dues taules mitjançant una sola columna clau.
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
