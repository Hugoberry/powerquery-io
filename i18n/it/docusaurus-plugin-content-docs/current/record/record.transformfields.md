---
title: Record.TransformFields
---

# Record.TransformFields


Restituisce un record dopo aver applicato le trasformazioni specificate.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Restituisce un record dopo aver applicato le trasformazioni specificate nell'elenco `transformOperations` a `record`. È possibile che uno o più campi siano stati trasformati in un dato momento.

Nel caso di un singolo campo trasformato, è previsto che `transformOperations` sia un elenco con due elementi. Il primo elemento in `transformOperations` specifica un nome di campo e il secondo elemento in `transformOperations` specifica la funzione da usare per la trasformazione. Ad esempio, `{"Quantity", Number.FromText}`

Nel caso di più campi trasformati, è previsto che `transformOperations` sia un elenco di elenchi, in cui ogni elenco interno è una coppia di nome di campo e operazioni di trasformazione. Ad esempio, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Convertire il campo "Price" in un campo numerico.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
Convertire i campi "OrderID" e "Price" in numeri.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
