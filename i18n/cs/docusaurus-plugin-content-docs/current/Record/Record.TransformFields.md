---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Provede zadané transformace a vrátí výsledný záznam.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Provede transformace zadané v seznamu <code>transformOperations</code> v záznamu <code>record</code> a vrátí výsledný záznam.    V jednu chvíli lze transformovat jedno nebo více polí.      <div>Při transformaci jednoho pole se očekává, že je hodnota <code>transformOperations</code> seznam se dvěma položkami. První položka v seznamu <code>transformOperations</code> určuje název pole a druhá položka v seznamu <code>transformOperations</code> určuje funkci, která se má použít k transformaci. Příklad: <code>\{"Quantity", Number.FromText}</code></div>      <div>Pokud je transformováno více polí, očekává se, že je hodnota <code>transformOperations</code> seznam seznamů, ve kterém každý vnořený seznam obsahuje pár tvořený názvem pole a operací transformace. Příklad: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
