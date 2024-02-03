---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Retorna un registre després d&#39;aplicar les transformacions especificades.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retorna un registre després d'aplicar les transformacions especificades a la llista <code>transformOperations</code> a <code>record</code>.    És possible que un o més camps es transformin en un moment donat.      <div>En cas de transformació d'un únic camp, s'espera que <code>transformOperations</code> sigui una llista amb dos elements. El primer element de <code>transformOperations</code> especifica un nom de camp i el segon element de <code>transformOperations</code> especifica la funció que s'ha d'utilitzar per a la transformació. Per exemple, <code>\{"Quantity", Number.FromText}</code></div>      <div>En cas de transformació de diversos camps, s'espera que <code>transformOperations</code> sigui una llista de llistes, en què cada llista interna és un parell format per nom de camp i operació de transformació. Per exemple, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Converteix el camp &#34;Price&#34; en un nombre.
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
Converteix els camps &#34;OrderID&#34; i &#34;Price&#34; en nombres.
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
