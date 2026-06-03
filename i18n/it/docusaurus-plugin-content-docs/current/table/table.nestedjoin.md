---
title: Table.NestedJoin
---

# Table.NestedJoin


Esegue un join tra tabelle per le colonne specificate e fornisce il risultato del join in una nuova colonna.


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

Crea un join delle righe di `table1` con le righe di `table2` in base all'uguaglianza dei valori delle colonne chiave selezionate da `key1` (per `table1`) e da `key2` (per `table2`). I risultati sono immessi nella colonna denominata `newColumnName`.

Il valore facoltativo `joinKind` specifica la tipologia di join da eseguire. Per impostazione predefinita, viene eseguito un left outer join se non si specifica un valore facoltativo `joinKind`.

È possibile includere un set facoltativo di `keyEqualityComparers` per specificare la modalità di confronto delle colonne chiave. Questa funzionalità è attualmente consentita solo per uso interno.


## Examples

### Example #1
Unisce due tabelle usando una singola colonna chiave.
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
