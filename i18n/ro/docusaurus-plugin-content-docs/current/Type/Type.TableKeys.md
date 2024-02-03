---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Returnează o posibilă listă necompletată de chei pentru tipul de tabel dat.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Returnează o posibilă listă necompletată de chei pentru tipul de tabel dat.<br />    <br />    Fiecare cheie este definită utilizând o înregistrare în formularul următor:    <ul>      <li>        <code>Coloane</code>: o listă de nume de coloane care definesc cheia      </li>      <li>        <code>Primar</code>: <code>true</code> dacă cheia este cheia primară a tabelului; în caz contrar, <code>false</code>      </li>    </ul>    


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
