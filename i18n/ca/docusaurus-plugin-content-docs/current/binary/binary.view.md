---
title: Binary.View
---

# Binary.View


Crea o amplia un element binari amb controladors definits per l'usuari per a operacions d'acció i consulta.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Retorna una visualització de `binary` en què les funcions especificades a `handlers` s'utilitzen en lloc del comportament per defecte d'una operació quan l'operació s'aplica a la visualització.

Si s'especifica `binary`, les opcions del controlador són opcionals. Si no s'especifica `binary`, s'ha d'incloure la funció del controlador `GetStream`. Si no s'especifica una funció del controlador per a una operació, el comportament per defecte de l'operació s'aplica a `binary` com a alternativa (tret en el cas de `GetExpression`).

Les funcions del controlador han de retornar un valor que sigui equivalent semànticament al resultat de l'aplicació de l'operació amb `binary` (o a la visualització resultant en el cas de `GetExpression`).

Si una funció del controlador genera un error, s'aplica el comportament per defecte de l'operació a la visualització.

`Binary.View` es pot utilitzar per implementar plecs a un origen de dades, és a dir, la traducció de consultes M en operacions específiques de l'origen (per exemple, per baixar una secció d'un fixter).

Consulteu la documentació publicada del connector personalitzat del Power Query per obtenir una descripció més completa de `Binary.View`.


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
