---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Promou la primera fila de valors com a capçaleres de columna noves (és a dir, noms de columna).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Promou la primera fila de valors com a capçaleres de columna noves (és a dir, noms de columna). Per defecte, només es promouen els valors de text o numèrics a les capçaleres. Les opcions vàlides són les següents:    <div>      <code>PromoteAllScalars</code>: si es defineix com a <code>true</code>, tots els valors escalars de la primera fila es promouen a les capçaleres mitjançant el codi <code>Culture</code>, si s’especifica (o la configuració regional del document actual).    Pel que fa als valors que no poden convertir-se en text, s’utilitzarà un nom de columna per defecte.    </div>    <div>    <code>Culture</code>: un nom de cultura que especifica la cultura de les dades.    </div>  


## Examples

### Example #1 
Promou la primera fila de valors de la taula.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Promoveu tots els valors escalars de la primera fila de la taula a les capçaleres.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
