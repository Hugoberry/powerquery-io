---
title: Type.TableKeys
---

# Type.TableKeys


Devolve a lista posiblemente baleira de claves para o tipo de táboa indicado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Devolve a lista posiblemente baleira de claves para o tipo de táboa indicado.  
  
Cada clave defínese mediante un rexistro no seguinte formulario:

-   `Columnas`: lista dos nomes de columnas que definen a clave
-   `Primaria`: `true` se é a clave principal da táboa, se non, `false`


## Examples

### Example #1
Devolve a información de clave para un tipo de táboa.
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
