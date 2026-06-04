---
title: Text.TrimEnd
---

# Text.TrimEnd


Odstrani vse navedene končne znake.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vrne rezultat odstranjevanja vseh končnih znakov iz določenega niza`text`. Kot privzeto so odstranjeni vsi končni presledki.

-   `text`: Besedilo, iz katerega bodo odstranjeni končni znaki.
-   `trim`: Preglasi presledke, ki so privzeto obrezani. Ta parameter je lahko en sam znak ali seznam enojnih znakov. Vsaka končna operacija obrezovanja se ustavi, ko je zaznan nerezani znak.


## Examples

### Example #1
Odstranite končne presledke iz" a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Odstranite končne ničle iz besedilnega zagotovila oblazinjenega števila s plavajočo vejico.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Odstranite končne zapolnjevanje znakov iz imena računa z nespremenljivo širino.
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
