---
title: Text.TrimStart
---

# Text.TrimStart


Pašalinami visi nurodyti priekyje esantys simboliai.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Pateikiamas visų priekyje esančių simbolių pašalinimo iš nurodyto `text` rezultatas. Pagal numatytuosius nustatymus visi priekyje esantys tarpo simboliai pašalinami.

-   `text`: tekstas, iš kurio reikia pašalinti priekyje esančius simbolius.
-   `trim`: perrašo tarpo simbolius, kurie koreguojami pagal numatytuosius parametrus. Šis parametras gali būti vienas simbolis arba vieno simbolio sąrašas. Kiekviena pradžios koregavimo operacija sustabdoma, kai aptinkamas neapkarpytas simbolis.


## Examples

### Example #1
Pašalinkite tarpą priekyje iš „ a b c d “.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Pašalinkite priekyje esančius nulius iš skaičiaus tekstinės pateikties.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Pašalinkite pradžios užpildymo simbolius iš fiksuoto pločio paskyros pavadinimo.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
