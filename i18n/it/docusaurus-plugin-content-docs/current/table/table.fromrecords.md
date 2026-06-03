---
title: Table.FromRecords
---

# Table.FromRecords


Converte un elenco di record in una tabella.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Converte un elenco specifico di record in una tabella.

-   `records`: l'elenco di record da convertire in una tabella.
-   `columns`: (facoltativo) un elenco dei nomi delle colonne della tabella o il tipo di tabella.
-   `missingField`: (facoltativo) specifica come gestire i campi mancanti in una riga. Usare uno dei valori seguenti:
    -   `MissingField.Error`: tutti i campi mancanti generano un errore (impostazione predefinita).
    -   `MissingField.UseNull`: tutti i campi mancanti vengono inclusi come valori `null`.
      
    L'uso di `MissingField.Ignore` in questo parametro genera un errore.


## Examples

### Example #1
Creare una tabella dai record, usando i numeri di campo dei record come nomi di colonna.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Creare una tabella dai record con colonne tipizzate e selezionare le colonne numeriche.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
A partire dai record specificati, creare una tabella contenente il nome, l'iniziale del secondo nome e il cognome dei clienti. Se manca uno qualsiasi dei valori, sostituirlo con `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
