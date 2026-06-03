---
title: Text.TrimEnd
---

# Text.TrimEnd


Fjerner alle angivne efterstillede tegn.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerer resultatet af at fjerne alle efterstillede tegn fra den angivne `text`. Som standard fjernes alle efterfølgende mellemrumstegn.

-   `text`: Den tekst, hvorfra de efterfølgende tegn skal fjernes.
-   `trim`: Tilsidesætter de mellemrumstegn, der som standard er trimmet. Denne parameter kan enten være et enkelt tegn eller en liste over enkelte tegn. Hver efterstillet trimhandling stopper, når der registreres et ikke-trimmet tegn.


## Examples

### Example #1
Fjern efterstillede mellemrum fra " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Fjern efterstillede nuller fra en tekstrepræsentation af et fyldt flydende tal.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Fjern de efterstillede udfyldningstegn fra et kontonavn med fast bredde.
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
