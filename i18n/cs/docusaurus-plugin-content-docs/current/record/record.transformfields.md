---
title: Record.TransformFields
---

# Record.TransformFields


Provede zadané transformace a vrátí výsledný záznam.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Provede transformace zadané v seznamu `transformOperations` v záznamu `record` a vrátí výsledný záznam. V jednu chvíli lze transformovat jedno nebo více polí.

Při transformaci jednoho pole se očekává, že je hodnota `transformOperations` seznam se dvěma položkami. První položka v seznamu `transformOperations` určuje název pole a druhá položka v seznamu `transformOperations` určuje funkci, která se má použít k transformaci. Příklad: `{"Quantity", Number.FromText}`

Pokud je transformováno více polí, očekává se, že je hodnota `transformOperations` seznam seznamů, ve kterém každý vnořený seznam obsahuje pár tvořený názvem pole a operací transformace. Příklad: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Převede pole Cena na číslo.
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
Převede pole OrderID a Cena na čísla.
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
