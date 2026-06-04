---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Returnează un nou tip de tabel cu toate cheile înlocuite cu lista de chei specificată.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Returnează un nou tip de tabel cu toate cheile înlocuite cu lista de chei specificată.  
  
Fiecare cheie este definită utilizând o înregistrare în formularul următor:

-   `Coloane`: o listă de nume de coloane care definesc cheia
-   `Primar`: `true` dacă cheia este cheia primară a tabelului; în caz contrar, `false`

Lista de chei specificată este validată pentru a vă asigura că nu sunt definite mai multe chei primare și că toate numele de coloane cheie există în tipul de tabel.


## Examples

### Example #1
Înlocuiți informațiile cheie dintr-un tip de tabel.
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
Goliți informațiile cheie definite anterior dintr-un tip de tabel.
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
