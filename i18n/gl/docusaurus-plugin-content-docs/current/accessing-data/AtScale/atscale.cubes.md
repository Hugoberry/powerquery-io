---
title: AtScale.Cubes
---

# AtScale.Cubes


Datos de cubo de importación ou DirectQuery de AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Devolve datos de cubo de AtScale no servidor `server`. Pode especificarse un parámetro de rexistro opcional, `options`, para controlar as seguintes opcións:

-   `TypedMeasureColumns`: un valor lóxico que indica se os tipos especificados no modelo multidimensional ou tabular se usarán para os tipos das columnas de medidas engadidas. Cando se configura como false, usarase o tipo "number" para todas as columnas de medidas. O valor predefinido para esta opción é false.
-   `CommandTimeout`: unha duración (en segundos) que controla canto tempo se permite executar a consulta do lado do servidor ata que se cancele. O valor predefinido depende do controlador.
-   `ConnectionTimeout`: unha duración (en segundos) que controla canto tempo esperar antes de abandonar unha tentativa para realizar unha conexión co servidor. O valor predeterminado depende do controlador.

O parámetro de rexistro expecifícase como \[opción1 = valor1, opción2 = valor2...\].


## Examples

### Example #1
Enumera os datos de cubo dun cubo AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



