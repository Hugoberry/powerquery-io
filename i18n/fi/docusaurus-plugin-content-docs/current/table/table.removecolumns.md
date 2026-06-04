---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Poistaa määritetyt sarakkeet.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Poistaa määritetyn kohteen `columns` annetusta kohteesta `table`. Jos määritettyä saraketta ei ole olemassa, aiheutuu virhe, ellei valinnainen parametri `missingField` määritä vaihtoehtoista toimintaa (esimerkiksi `MissingField.UseNull` tai `MissingField.Ignore`).


## Examples

### Example #1
Poista sarake \[Phone\] taulukosta.
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
