---
title: Type.TableKeys
---

# Type.TableKeys


Tiek atgriezts iespējami tukšs atslēgu saraksts norādītajam tabulas tipam.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Tiek atgriezts iespējami tukšs atslēgu saraksts norādītajam tabulas tipam.  
  
Katra atslēga tiek definēta, izmantojot ierakstu šādā formā:

-   `Kolonnas`: kolonnu nosaukumu saraksts, kas definē atslēgu
-   `Primārā`: `patiess`, ja atslēga ir tabulas primārā atslēga; pretējā gadījumā `aplams`


## Examples

### Example #1
Tiek atgriezta tabulas tipa atslēgas informācija.
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
