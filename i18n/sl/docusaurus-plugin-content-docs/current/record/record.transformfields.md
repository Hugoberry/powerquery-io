---
title: Record.TransformFields
---

# Record.TransformFields


Vrne zapis po uporabi navedenih pretvorb.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vrne zapis po uporabi pretvorb, navedenih na seznamu `transformOperations`, za `record`. Ob danem času lahko pretvorite eno ali več polj.

Pri pretvorbi enega polja se pričakuje, da je `transformOperations` seznam z dvema elementoma. Prvi element v `transformOperations` določa ime polja, drugi element v `transformOperations` pa določa funkcijo, ki bo uporabljena za pretvorbo. Na primer: `{"Quantity", Number.FromText}`

Pri pretvorbi več polj se pričakuje, da je `transformOperations` seznam seznamov, pri čemer je vsak notranji seznam par imena polja in postopka pretvorbe. Na primer: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Pretvorite polje"Cena"v število.
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
Pretvorite polji"IDNaročila"in"Cena"v števila.
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
