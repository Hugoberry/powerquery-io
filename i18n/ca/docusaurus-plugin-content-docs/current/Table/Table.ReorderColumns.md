---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Retorna una taula amb les columnes en l&#39;ordre especificat.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Retorna una taula a partir de l'entrada <code>table</code>, amb les columnes en l'ordre especificat per <code>columnOrder</code>. Les columnes que no s'especifiquin a la llista no es reordenaran.     Si no existeix la columna, es produeix una excepció tret que el paràmetre opcional <code>missingField</code> especifiqui una alternativa (és a dir, <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Canvia l&#39;ordre de les columnes [Phone] i [Name] a la taula.
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
Canvia l&#39;ordre de les columnes [Phone] i [Address] o utilitza &#34;MissingField.Ignore&#34; a la taula. La taula no canvia perquè la columna [Address] no existeix.
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
