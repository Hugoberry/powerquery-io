---
title: Type.TableKeys
---

# Type.TableKeys


Returnează o posibilă listă necompletată de chei pentru tipul de tabel dat.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Returnează o posibilă listă necompletată de chei pentru tipul de tabel dat.  
  
Fiecare cheie este definită utilizând o înregistrare în formularul următor:

-   `Coloane`: o listă de nume de coloane care definesc cheia
-   `Primar`: `true` dacă cheia este cheia primară a tabelului; în caz contrar, `false`


## Examples

### Example #1
Returnați informațiile cheie pentru un tip de tabel.
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
