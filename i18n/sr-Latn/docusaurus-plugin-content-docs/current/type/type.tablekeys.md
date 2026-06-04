---
title: Type.TableKeys
---

# Type.TableKeys


Vraća moguće praznu listu ključeva za dati tip tabele.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Vraća verovatno praznu listu ključeva za dati tip tabele.  
  
Svaki ključ je definisan pomoću zapisa u sledećem obrascu:

-   `Columns`: spisak imena kolona koje definišu ključ
-   `Primary`: `true` ako je ključ primarni ključ tabele; inače, `false`


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
