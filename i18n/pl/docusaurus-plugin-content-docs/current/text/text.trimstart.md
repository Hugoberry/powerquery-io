---
title: Text.TrimStart
---

# Text.TrimStart


Usuwa wszystkie określone znaki wiodące.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Zwraca wynik usunięcia wszystkich znaków wiodących z określonej wartości tekstowej `text`. Domyślnie wszystkie wiodące znaki odstępu są usuwane.

-   `text`: tekst, z którego mają zostać usunięte znaki wiodące.
-   `trim`: zastępuje znaki odstępu, które są domyślnie przycinane. Ten parametr może być pojedynczym znakiem lub listą pojedynczych znaków. Każda operacja przycinania znaków wiodących jest przerywana w przypadku napotkania nieprzyciętego znaku.


## Examples

### Example #1
Usuń spacje wiodące z wartości „ a b c d ”.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Usuń wiodące zera z tekstowej reprezentacji liczby.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Usuń wiodące znaki uzupełnienia z nazwy konta o stałej szerokości.
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
