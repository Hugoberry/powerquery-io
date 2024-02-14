---
title: Record.TransformFields
---

# Record.TransformFields


Returnerar en post när angivna transformeringar har tillämpats.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerar en post när transformeringarna som anges i listan <code>transformOperations</code> har tillämpats på <code>record</code>.    Ett eller flera fält kan transformeras samtidigt.      <div>När det gäller ett enskilt fält som transformeras förväntas <code>transformOperations</code> vara en lista med två objekt. Det första objektet i <code>transformOperations</code> anger ett fältnamn och det andra objektet i <code>transformOperations</code> anger funktionen som ska användas för transformeringen. Till exempel: <code>\{"Quantity", Number.FromText}</code></div>      <div>När det gäller flera fält som transformeras förväntas <code>transformOperations</code> vara en lista med listor, där varje inre lista är ett par bestående av fältnamn och transformeringsåtgärd. Till exempel: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Konverterar fältet &#34;Price&#34; till ett tal.
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
Konverterar OrderID- och Price-fälten till nummer.
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
