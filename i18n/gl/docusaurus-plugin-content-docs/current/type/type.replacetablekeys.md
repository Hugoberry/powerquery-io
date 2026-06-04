---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Devolve un novo tipo de táboa con todas as claves substituídas pola lista de claves especificada.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Devolve un novo tipo de táboa con todas as claves substituídas pola lista de claves especificada.  
  
Cada clave defínese mediante un rexistro no seguinte formulario:

-   `Columnas`: lista dos nomes de columnas que definen a clave
-   `Primaria`: `true` se é a clave principal da táboa, se non, `false`

A lista de claves especificada valídase para garantir que non se define máis dunha clave principal e que todos os nomes de columnas existen no tipo de táboa.


## Examples

### Example #1
Substituír a información de clave sobre un tipo de táboa.
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
Elimina a información de clave previamente definida sobre un tipo de táboa.
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
