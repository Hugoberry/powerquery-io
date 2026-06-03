---
title: Text.TrimEnd
---

# Text.TrimEnd


Tar bort alla angivna avslutande tecken.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerar resultatet av att ta bort alla avslutande tecken från angivet `text`. Som standard tas alla avslutande blankstegstecken bort.

-   `text`: Den text som de avslutande tecknen ska tas bort från.
-   `trim`: Åsidosätter blankstegstecken som trimmas som standard. Den här parametern kan antingen vara ett enstaka tecken eller en lista med enskilda tecken. Varje trimning av avslutande tecken stoppas när ett icke-trimmat tecken påträffas.


## Examples

### Example #1
Ta bort avslutande blanksteg från " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Ta bort avslutande nollor från en textrepresentation av ett utfyllt flyttal.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Ta bort de avslutande utfyllnadstecken från ett kontonamn med fast bredd.
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
