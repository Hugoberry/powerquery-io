---
title: Table.View
---

# Table.View


## Description

Crea o amplia una taula amb controladors definits per l&#39;usuari per a operacions d&#39;acció i consulta.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Retorna una visualització de <code>table</code> en què les funcions especificades a <code>handlers</code> s'utilitzen en lloc del comportament per defecte d'una operació quan l'operació s'aplica a la visualització.<br />Si s'especifica <code>table</code>, les opcions del controlador són opcionals. Si no s'especifica <code>table</code>, s'han d'incloure les funcions <code>GetType</code> i <code>GetRows</code> del controlador. Si no s'especifica una funció del controlador per a una operació, el comportament per defecte de l'operació s'aplica a <code>table</code> com a alternativa (tret en el cas de <code>GetExpression</code>).<br />Les funcions del controlador han de retornar un valor que sigui equivalent semànticament al resultat de l'aplicació de l'operació amb <code>table</code> (o a la visualització resultant en el cas de <code>GetExpression</code>).<br />Si una funció del controlador genera un error, s'aplica el comportament per defecte de l'operació a la visualització.<br /><code>Table.View</code> es pot utilitzar per implementar plecs a un origen de les dades, és a dir, la traducció de consultes M en consultes específiques de l'origen (per exemple per crear instruccions del T-SQL de consultes M).<br />Consulteu la documentació publicada del connector personalitzat del Power Query per obtenir una descripció més completa de <code>Table.View</code>.<br />


## Examples

### Example #1 
Crea una visualització bàsica que no requereixi accedir a les files per determinar el tipus o el recompte de files.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
