---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Retorna la llista possiblement buida de claus per al tipus de taula donat.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Retorna la llista possiblement buida de claus per al tipus de taula especificat.<br />    <br />    Cada clau es defineix amb un registre del formulari següent:    <ul>      <li>        <code>Columnes</code>: una llista dels noms de columna que defineixen la clau      </li>      <li>        <code>Principal</code>: <code>true</code> si la clau és la principal de la taula; si no, <code>fals</code>      </li>    </ul>    


## Examples

### Example #1 
Retorna la informació clau d&#39;un tipus de taula.
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
