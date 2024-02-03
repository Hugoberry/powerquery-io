---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Vrne seznam ključev za dano vrsto tabele, ki je morda prazen.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Vrne seznam ključev za dano vrsto tabele, ki je morda prazen.<br />    <br />    Vsak ključ je določen z zapisom v tej obliki:    <ul>      <li>        <code>Stolpci</code>: seznam imen stolpcev, ki določajo ključ      </li>      <li>        <code>Primarno</code>: <code>true</code>, če je ključ primarni ključ tabele; sicer <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Vrnite informacije o ključu za vrsto tabele.
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
