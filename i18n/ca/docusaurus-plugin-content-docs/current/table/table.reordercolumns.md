---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Retorna una taula amb les columnes en l'ordre especificat.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Retorna una taula a partir de l'entrada `table`, amb les columnes en l'ordre especificat per `columnOrder`. Les columnes que no s'especifiquin a la llista no es reordenaran. Si no existeix la columna, es produeix un error tret que el paràmetre opcional `missingField` especifiqui una alternativa (és a dir, `MissingField.UseNull` o `MissingField.Ignore`).


## Examples

### Example #1
Canvia l'ordre de les columnes \[Phone\] i \[Name\] a la taula.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Canvia l'ordre de les columnes \[Phone\] i \[Address\] o utilitza "MissingField.Ignore" a la taula. La taula no canvia perquè la columna \[Address\] no existeix.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
