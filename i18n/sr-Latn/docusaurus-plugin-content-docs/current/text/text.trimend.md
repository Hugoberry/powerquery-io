---
title: Text.TrimEnd
---

# Text.TrimEnd


Uklanja sve navedene završne znakove.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vraća rezultat uklanjanja svih završnih znakova iz navedenog `text`. Svi završni razmaci se podrazumevano uklanjaju.

-   `text`: tekst iz kog će biti uklonjeni završni znakovi.
-   `trim`: zamenjuje znakove razmaka koji su podrazumevano skraćeni. Ovaj parametar može da bude jedan znak ili lista pojedinačnih znakova. Svaka operacija skraćivanja završnih znakova se zaustavlja kada se naiđe na znak koji nije skraćen.


## Examples

### Example #1
Uklanja sve razmake s kraja vrednosti „ a b c d “.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Uklonite završne nule iz tekstualnog prikaza broja sa popunjenom pokretnom tačkom.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Uklonite završne znakove za popunjavanje iz imena naloga fiksne širine.
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
