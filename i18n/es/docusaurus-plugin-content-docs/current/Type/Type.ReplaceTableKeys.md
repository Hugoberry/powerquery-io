---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Devuelve un nuevo tipo de tabla con todas las claves reemplazadas por la lista especificada de claves.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Devuelve un nuevo tipo de tabla con todas las claves reemplazadas por la lista especificada de claves.<br />    <br />    Cada clave se define mediante un registro de la siguiente forma:    <ul>      <li>        <code>Columnas</code>: una lista de los nombres de columna que definen la clave      </li>      <li>        <code>Principal</code>: <code>true</code> si la clave es la clave principal de la tabla; de lo contrario, <code>false</code>      </li>    </ul>    La lista especificada de claves se valida para garantizar que no se defina más de una clave principal y que todos los nombres de columna de clave existan en el tipo de tabla.    


## Examples

### Example #1 
Reemplace la información de clave en un tipo de tabla.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
Borra la información de clave definida previamente en un tipo de tabla.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
