---
title: Text.TrimEnd
---

# Text.TrimEnd


Pašalinami visi nurodyti pabaigoje esantys simboliai.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Pateikiamas visų gale esančių simbolių pašalinimo iš nurodyto `text` rezultatas. Pagal numatytuosius nustatymus visi tarpo simboliai pašalinami.

-   `text`: tekstas, iš kurio reikia pašalinti pabaigos simbolius.
-   `trim`: perrašo tarpo simbolius, kurie koreguojami pagal numatytuosius parametrus. Šis parametras gali būti vienas simbolis arba vieno simbolio sąrašas. Kiekviena pabaigos koregavimo operacija sustabdoma, kai aptiktas neapkarpytas simbolis.


## Examples

### Example #1
Pašalinkite tarpą gale iš „ a b c d “.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Pašalinkite pabaigoje esančius nulius iš papildyto slankiojo kablelio skaičiaus teksto atvaizdavimo.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Pašalinkite pabaigos užpildymo simbolius iš fiksuoto pločio paskyros pavadinimo.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
