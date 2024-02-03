---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Poistaa määritetyt sarakkeet.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Poistaa määritetyn kohteen <code>columns</code> annetusta kohteesta <code>table</code>.    Jos määritettyä saraketta ei ole olemassa, aiheutuu virhe, ellei valinnainen parametri <code>missingField</code> määritä vaihtoehtoista toimintaa (esimerkiksi <code>MissingField.UseNull</code> tai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Poista sarake [Phone] taulukosta.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Yritä poistaa taulukosta sarake, jota ei ole.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
