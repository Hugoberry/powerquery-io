---
title: Text.TrimEnd
---

# Text.TrimEnd


Usuwa wszystkie określone znaki końcowe.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Zwraca wynik usunięcia wszystkich znaków końcowych z określonej wartości tekstowej `text`. Domyślnie wszystkie końcowe znaki odstępu są usuwane.

-   `text`: tekst, z którego mają zostać usunięte znaki końcowe.
-   `trim`: zastępuje znaki odstępu, które są domyślnie przycinane. Ten parametr może być pojedynczym znakiem lub listą pojedynczych znaków. Każda operacja przycinania znaków końcowych jest przerywana w przypadku napotkania nieprzyciętego znaku.


## Examples

### Example #1
Usuń spacje końcowe z wartości „ a b c d ”.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Usuń końcowe zera z tekstowej reprezentacji uzupełnionej liczby zmiennoprzecinkowej.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Usuń końcowe znaki uzupełnienia z nazwy konta o stałej szerokości.
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
