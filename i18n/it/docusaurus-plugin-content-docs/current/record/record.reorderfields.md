---
title: Record.ReorderFields
---

# Record.ReorderFields


Riordina i campi del record in modo che corrispondano all'ordine di un elenco di nomi di campo.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Riordina i campi di un record in modo che corrispondano all'ordine di un elenco di nomi di campo.

-   `record`: record contenente i campi da riordinare.
-   `fieldOrder`: elenco contenente il nuovo ordine dei campi da applicare al record. I valori dei campi vengono mantenuti e i campi non elencati nel parametro vengono lasciati nelle posizioni originali.
-   `missingField`: specifica l'azione prevista per i valori mancanti in una riga che contiene meno campi del previsto. I valori seguenti sono validi:
    -   `MissingField.Error`: (impostazione predefinita) indica che i campi mancanti devono restituire un errore. Se non viene immesso alcun valore per il parametro `missingField`, verrà utilizzato questo valore.
    -   `MissingField.Ignore`: indica che i campi mancanti devono essere ignorati.
    -   `MissingField.UseNull`: indica che i campi mancanti devono essere inclusi come valori `null`.


## Examples

### Example #1
Riordinare alcuni dei campi nel record.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Riordinare alcuni campi nel record e includere `null` per eventuali campi mancanti.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
