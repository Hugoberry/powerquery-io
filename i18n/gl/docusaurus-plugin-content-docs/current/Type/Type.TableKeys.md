---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Devolve a lista posiblemente baleira de claves para o tipo de táboa indicado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Devolve a lista posiblemente baleira de claves para o tipo de táboa indicado.<br />    <br />    Cada clave defínese mediante un rexistro no seguinte formulario:    <ul>      <li>        <code>Columnas</code>: lista dos nomes de columnas que definen a clave      </li>      <li>        <code>Primaria</code>: <code>true</code> se é a clave principal da táboa, se non, <code>false</code>      </li>    </ul>    


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
