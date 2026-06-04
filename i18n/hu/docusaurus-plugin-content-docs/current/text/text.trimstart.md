---
title: Text.TrimStart
---

# Text.TrimStart


Eltávolítja az összes megadott kezdő karaktert.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

A megadott `text` összes kezdő karaktere eltávolításának eredményét adja vissza. Alapértelmezés szerint az összes kezdő szóköz karakter el lesz távolítva.

-   `text`: Az a szöveg, amelyből a kezdő karaktereket el kell távolítani.
-   `trim`: Felülbírálja az alapértelmezés szerint levágott szóköz karaktereket. Ez a paraméter lehet egyetlen karakter vagy egyetlen karakterek listája. Minden egyes kezdő levágási művelet leáll, amikor a rendszer nem levágott karakterrel találkozik.


## Examples

### Example #1
A kezdő szóközök eltávolítása a „ a b c d ” szövegből
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
A kezdő nullák eltávolítása egy szám szöveges ábrázolásából.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
A kezdő kitöltő karakterek eltávolítása egy rögzített szélességű fióknévből.
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
