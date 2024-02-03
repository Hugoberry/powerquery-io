---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Retorna un tipus de taula amb totes les claus substituïdes per la llista especificada de claus.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Retorna un tipus de taula amb totes les claus substituïdes per la llista especificada de claus.<br />    <br />    Cada clau es defineix amb un registre del formulari següent:    <ul>      <li>        <code>Columnes</code>: una llista dels noms de columna que defineixen la clau      </li>      <li>        <code>Principal</code>: <code>true</code> si la clau és la principal de la taula; si no, <code>fals</code>      </li>    </ul>    S'ha validat la llista especificada de claus per garantir que no s'ha definit més d'una clau principal i que tots els noms de columna clau existeixen al tipus de taula.    


## Examples

### Example #1 
Substitueix la informació clau d&#39;un tipus de taula.
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
Esborreu la informació clau definida anteriorment en un tipus de taula.
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
