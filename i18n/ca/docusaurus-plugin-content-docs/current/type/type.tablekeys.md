---
title: Type.TableKeys
---

# Type.TableKeys


Retorna la llista possiblement buida de claus per al tipus de taula donat.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Retorna la llista possiblement buida de claus per al tipus de taula especificat.  
  
Cada clau es defineix amb un registre del formulari següent:

-   `Columnes`: una llista dels noms de columna que defineixen la clau
-   `Principal`: `true` si la clau és la principal de la taula; si no, `fals`


## Examples

### Example #1
Retorna la informació clau d'un tipus de taula.
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
