---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Restituisce un record dopo aver applicato le trasformazioni specificate.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Restituisce un record dopo aver applicato le trasformazioni specificate nell'elenco <code>transformOperations</code> a <code>record</code>.    È possibile che uno o più campi siano stati trasformati in un dato momento.      <div>Nel caso di un singolo campo trasformato, è previsto che <code>transformOperations</code> sia un elenco con due elementi. Il primo elemento in <code>transformOperations</code> specifica un nome di campo e il secondo elemento in <code>transformOperations</code> specifica la funzione da usare per la trasformazione. Ad esempio, <code>\{"Quantity", Number.FromText}</code></div>      <div>Nel caso di più campi trasformati, è previsto che <code>transformOperations</code> sia un elenco di elenchi, in cui ogni elenco interno è una coppia di nome di campo e operazioni di trasformazione. Ad esempio, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Convertire il campo &#34;Price&#34; in un campo numerico.
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
Convertire i campi &#34;OrderID&#34; e &#34;Price&#34; in numeri.
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
