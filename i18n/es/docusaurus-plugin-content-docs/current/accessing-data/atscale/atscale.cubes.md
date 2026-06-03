---
title: AtScale.Cubes
---

# AtScale.Cubes


Permite importar datos de un cubo de DirectQuery desde una instancia de AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Devuelve los datos de cubo de AtScale en el servidor `server`. Se puede especificar un parámetro de registro opcional, `options`, para controlar las opciones siguientes:

-   `TypedMeasureColumns`: valor lógico que indica si los tipos especificados en el modelo multidimensional o tabular se usarán para los tipos de las columnas de medida agregadas. Cuando se establece en "false", el tipo "number" se usa para todas las columnas de medida. El valor predeterminado de esta opción es "false".
-   `CommandTimeout`: duración (en segundos) que permite controlar durante cuánto tiempo se permite que la consulta del lado servidor se ejecute antes de cancelarla. El valor predeterminado depende del controlador.
-   `ConnectionTimeout`: duración (en segundos) que permite controlar cuánto tiempo se debe esperar antes de cancelar un intento de conexión con el servidor. El valor predeterminado depende del controlador.

El parámetro de registro se especifica de esta forma: \[opción1 = valor1, opción2 = valor2...\].


## Examples

### Example #1
Permite enumerar los datos de un cubo de AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



