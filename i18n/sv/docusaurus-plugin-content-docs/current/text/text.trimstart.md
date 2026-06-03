---
title: Text.TrimStart
---

# Text.TrimStart


Tar bort alla angivna inledande tecken.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerar resultatet av att ta bort alla inledande tecken från angivet `text`. Som standard tas alla inledande blankstegstecken bort.

-   `text`: Den text som de inledande tecknen ska tas bort från.
-   `trim`: Åsidosätter blankstegstecken som trimmas som standard. Den här parametern kan antingen vara ett enstaka tecken eller en lista med enskilda tecken. Varje trimning av inledande tecken stoppas när ett icke-trimmat tecken påträffas.


## Examples

### Example #1
Ta bort inledande blanksteg från " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Ta bort inledande nollor från textrepresentationen av ett tal.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Ta bort de inledande utfyllnadstecken från ett kontonamn med fast bredd.
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
