---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Returnerer en post efter at have anvendt de angivne transformationer.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnerer en post efter at have anvendt de transformationer, der er angivet på listen <code>transformOperations</code>, på <code>record</code>.    Et eller flere felter kan transformeres på et givent tidspunkt.       <div>Hvis der transformeres et enkelt felt, forventes <code>transformOperations</code> at være en liste med to elementer. Det første element i <code>transformOperations</code> angiver et feltnavn, og det andet element i <code>transformOperations</code> angiver den funktion, der skal bruges til transformationen. Eksempel <code>\{"Quantity", Number.FromText}</code></div>      <div>Hvis flere felter transformeres, forventes <code>transformOperations</code> at være en liste over lister, hvor alle de indeholdte lister er et par bestående af feltnavn og en transformationshandling. Eksempel <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Konvertér feltet &#34;Pris&#34; til et tal.
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
Konvertér felterne &#34;Ordre-id&#34; og &#34;Pris&#34; til tal.
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
