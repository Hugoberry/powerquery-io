---
title: Text.TrimEnd
---

# Text.TrimEnd


Eltávolítja az összes megadott záró karaktert.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

A megadott `text` összes záró karaktere eltávolításának eredményét adja vissza. Alapértelmezés szerint az összes záró szóköz karakter el lesz távolítva.

-   `text`: Az a szöveg, amelyből a záró karaktereket el kell távolítani.
-   `trim`: Felülbírálja az alapértelmezés szerint levágott szóköz karaktereket. Ez a paraméter lehet egyetlen karakter vagy egyetlen karakterek listája. Minden egyes záró levágási művelet leáll, amikor a rendszer nem levágott karakterrel találkozik.


## Examples

### Example #1
A záró szóközök eltávolítása a „ a b c d ” szövegből
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
A záró nullák eltávolítása egy kitöltő lebegőpontos szám szöveges ábrázolásából.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
A záró kitöltő karakterek eltávolítása egy rögzített szélességű fióknévből.
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
