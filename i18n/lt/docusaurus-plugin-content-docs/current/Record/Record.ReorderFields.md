---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Pertvarkomas (-i) nurodytas (-i) laukas (-ai) pagal naująją tvarką.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Pateikiamas įrašas po laukų pertvarkymo <code>record</code> naudojant laukų išdėstymo tvarką, nurodytą sąraše <code>fieldOrder</code>. Pateikiamos laukų reikšmės, o laukai, nenurodyti <code>fieldOrder</code>, paliekami jų pradinėje padėtyje.


## Examples

### Example #1 
Pertvarkykite kai kuriuos laukus įraše.
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




## Category
Record.Transformations
