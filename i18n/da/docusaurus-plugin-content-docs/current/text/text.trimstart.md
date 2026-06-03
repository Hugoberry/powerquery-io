---
title: Text.TrimStart
---

# Text.TrimStart


Fjerner alle angivne foranstillede tegn.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerer resultatet af at fjerne alle foranstillede tegn fra den angivne `text`. Som standard fjernes alle foranstillede mellemrumstegn.

-   `text`: Den tekst, som de foranstillede tegn skal fjernes fra.
-   `trim`: Tilsidesætter de mellemrumstegn, der som standard er trimmet. Denne parameter kan enten være et enkelt tegn eller en liste over enkelte tegn. Hver foranstillet trimningshandling stopper, når der registreres et ikke-trimmet tegn.


## Examples

### Example #1
Fjern foranstillede mellemrum fra " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Fjern foranstillede nuller fra tekstrepræsentationen af et tal.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Fjern de foranstillede udfyldningstegn fra et kontonavn med fast bredde.
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
