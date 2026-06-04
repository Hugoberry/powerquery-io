---
title: Text.TrimStart
---

# Text.TrimStart


Uklanja sve navedene početne znakove.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vraća rezultat uklanjanja svih početnih znakova iz navedenog `text`. Svi početni razmaci se podrazumevano uklanjaju.

-   `text`: tekst iz kojeg će biti uklonjeni početni znakovi.
-   `trim`: zamenjuje znakove razmaka koji su podrazumevano skraćeni. Ovaj parametar može da bude jedan znak ili lista pojedinačnih znakova. Svaka operacija skraćivanja početnih znakova se zaustavlja kada se naiđe na znak koji nije skraćen.


## Examples

### Example #1
Uklanja sve razmake s početka vrednosti „ a b c d “.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Uklonite početne nule iz tekstualnog prikaza broja.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Uklonite početne znakove za popunjavanje iz imena naloga fiksne širine.
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
