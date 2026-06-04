---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Tiek atgriezts jauns tabulas tips, kurā visas atslēgas ir aizstātas ar norādīto atslēgu sarakstu.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Tiek atgriezts jauns tabulas tips, kurā visas atslēgas ir aizstātas ar norādīto atslēgu sarakstu.  
  
Katra atslēga tiek definēta, izmantojot ierakstu šādā formā:

-   `Kolonnas`: kolonnu nosaukumu saraksts, kas definē atslēgu
-   `Primārā`: `patiess`, ja atslēga ir tabulas primārā atslēga; pretējā gadījumā `aplams`

Norādītais atslēgu saraksts tiek validēts, lai nodrošinātu, ka nav definētas vairākas primārās atslēgas un vai tabulas tipam ir visi atslēgas kolonnu nosaukumi.


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
