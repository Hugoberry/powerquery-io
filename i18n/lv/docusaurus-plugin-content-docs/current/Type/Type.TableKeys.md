---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Tiek atgriezts iespējami tukšs atslēgu saraksts norādītajam tabulas tipam.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Tiek atgriezts iespējami tukšs atslēgu saraksts norādītajam tabulas tipam.<br />    <br />    Katra atslēga tiek definēta, izmantojot ierakstu šādā formā:    <ul>      <li>        <code>Kolonnas</code>: kolonnu nosaukumu saraksts, kas definē atslēgu      </li>      <li>        <code>Primārā</code>: <code>patiess</code>, ja atslēga ir tabulas primārā atslēga; pretējā gadījumā <code>aplams</code>      </li>    </ul>    


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
