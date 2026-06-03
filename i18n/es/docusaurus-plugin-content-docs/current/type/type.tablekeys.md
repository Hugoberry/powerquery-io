---
title: Type.TableKeys
---

# Type.TableKeys


Devuelve la lista posiblemente vacía de claves para el tipo de tabla dado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Devuelve la lista posiblemente vacía de claves para el tipo de tabla proporcionado.  
  
Cada clave se define mediante un registro de la siguiente forma:

-   `Columnas`: una lista de los nombres de columna que definen la clave
-   `Principal`: `true` si la clave es la clave principal de la tabla; de lo contrario, `false`


## Examples

### Example #1
Devuelve la información de clave de un tipo de tabla.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
