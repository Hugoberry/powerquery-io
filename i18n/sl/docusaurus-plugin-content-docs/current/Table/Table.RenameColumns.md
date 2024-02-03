---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Uporabi preimenovanja v obliki \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Preimenuje stolpce v tabeli <code>table</code>, kot je navedeno. Postopek zamenjave <code>renames</code> je sestavljen iz seznama dveh vrednosti – starega imena stolpca in novega imena stolpca, ki sta podana na seznamu.    Če stolpec ne obstaja, pride do izjeme, razen če izbirni parameter <code>missingField</code> določa nadomestno vrednost (npr. <code>MissingField.UseNull</code> ali <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Zamenjajte ime stolpca &#34;ŠtStranke&#34; z imenom &#34;IDStranke&#34; v tabeli.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Zamenjajte ime stolpca &#34;ŠtStranke&#34; z imenom &#34;IDStranke&#34; in &#34;TelefonskaŠt&#34; z &#34;Telefon&#34; v tabeli.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Zamenjajte ime stolpca &#34;NovStol&#34; z imenom &#34;NovStolpec&#34; v tabeli in prezrite, če stolpec ne obstaja.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
