---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordena els camps del registre perquè coincideixin amb l'ordre d'una llista dels noms de camp.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Reordena els camps d'un registre perquè coincideixin l'ordre d'una llista de noms de camp.

-   `record`: El registre que conté els camps que s'han de reordenar.
-   `fieldOrder`:Una llista que conté l'ordre nou dels camps que s'aplicaran al registre. Els valors del camp es mantenen i els camps que no es mostren en aquest paràmetre es conserven a les seves posicions originals.
-   `missingField`: Especifica l'acció que s'espera per als valors que falten d'una fila que conté menys camps dels que s'esperen. Els valors següents són vàlids:
    -   `MissingField.Error`: (Per defecte) Indica que els camps que falten haurien de donar error. Si no s'introdueix un valor per al paràmetre `missingField`, es farà servir aquest valor.
    -   `MissingField.Ignore`: Indica que els camps que falten s'haurien d'ignorar.
    -   `MissingField.UseNull`: Indica que els camps que falten s'haurien d'incloure com a valors `nuls`.


## Examples

### Example #1
Reordena alguns dels camps del registre.
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
Reordena alguns dels camps al registre i inclou `nul` per als camps que falten.
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
