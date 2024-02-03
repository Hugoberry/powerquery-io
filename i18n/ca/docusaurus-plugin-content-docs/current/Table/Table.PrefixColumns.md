---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Retorna una taula en què totes les columnes s&#39;han prefixat amb el text donat.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Retorna una taula en què tots els noms de columna de l'element <code>table</code> proporcionats tenen un prefix amb el text especificat, <code>prefix</code>, a més d'un punt amb el format <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Afegeix un prefix a les columnes que tenen &#34;MyTable&#34; a la taula.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
