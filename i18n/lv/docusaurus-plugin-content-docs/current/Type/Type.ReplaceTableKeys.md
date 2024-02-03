---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Tiek atgriezts jauns tabulas tips, kurā visas atslēgas ir aizstātas ar norādīto atslēgu sarakstu.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Tiek atgriezts jauns tabulas tips, kurā visas atslēgas ir aizstātas ar norādīto atslēgu sarakstu.<br />    <br />    Katra atslēga tiek definēta, izmantojot ierakstu šādā formā:    <ul>      <li>        <code>Kolonnas</code>: kolonnu nosaukumu saraksts, kas definē atslēgu      </li>      <li>        <code>Primārā</code>: <code>patiess</code>, ja atslēga ir tabulas primārā atslēga; pretējā gadījumā <code>aplams</code>      </li>    </ul>    Norādītais atslēgu saraksts tiek validēts, lai nodrošinātu, ka nav definētas vairākas primārās atslēgas un vai tabulas tipam ir visi atslēgas kolonnu nosaukumi.    


## Examples

### Example #1 
Aizstājiet tabulas tipa atslēgas informāciju.
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
Notīriet atslēgas informāciju, kas iepriekš definēta tabulas tipam.
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
