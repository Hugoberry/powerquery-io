---
title: Binary.View
---

# Binary.View


## Description

Crea o amplia un element binari amb controladors definits per l&#39;usuari per a operacions d&#39;acció i consulta.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Retorna una visualització de <code>binary</code> en què les funcions especificades a <code>handlers</code> s'utilitzen en lloc del comportament per defecte d'una operació quan l'operació s'aplica a la visualització.<br />Si s'especifica <code>binary</code>, les opcions del controlador són opcionals. Si no s'especifica <code>binary</code>, s'ha d'incloure la funció del controlador <code>GetStream</code>. Si no s'especifica una funció del controlador per a una operació, el comportament per defecte de l'operació s'aplica a <code>binary</code> com a alternativa (tret en el cas de <code>GetExpression</code>).<br />Les funcions del controlador han de retornar un valor que sigui equivalent semànticament al resultat de l'aplicació de l'operació amb <code>binary</code> (o a la visualització resultant en el cas de <code>GetExpression</code>).<br />Si una funció del controlador genera un error, s'aplica el comportament per defecte de l'operació a la visualització.<br /><code>Binary.View</code> es pot utilitzar per implementar plecs a un origen de dades, és a dir, la traducció de consultes M en operacions específiques de l'origen (per exemple, per baixar una secció d'un fixter).<br />Consulteu la documentació publicada del connector personalitzat del Power Query per obtenir una descripció més completa de <code>Binary.View</code>.<br />


## Examples

### Example #1 
Crea una visualització bàsica que no requereixi accedir a les dades per determinar-ne la longitud.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
