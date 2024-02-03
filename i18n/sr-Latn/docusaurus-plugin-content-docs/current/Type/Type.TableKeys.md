---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Vraća moguće praznu listu ključeva za dati tip tabele.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Vraća verovatno praznu listu ključeva za dati tip tabele.<br />    <br />    Svaki ključ je definisan pomoću zapisa u sledećem obrascu:    <ul>      <li>        <code>Columns</code>: spisak imena kolona koje definišu ključ      </li>      <li>        <code>Primary</code>: <code>true</code> ako je ključ primarni ključ tabele; inače, <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Vraćanje ključnih informacija za tip tabele.
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
