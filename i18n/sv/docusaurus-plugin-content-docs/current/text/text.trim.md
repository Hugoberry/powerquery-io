---
title: Text.Trim
---

# Text.Trim


Tar bort alla angivna inledande och avslutande tecken.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerar resultatet av att ta bort alla inledande och avslutande tecken från angivet `text`. Som standard tas alla inledande och avslutande blankstegstecken bort.

-   `text`: Den text som de inledande och avslutande tecknen ska tas bort från.
-   `trim`: Åsidosätter blankstegstecken som trimmas som standard. Den här parametern kan antingen vara ett enstaka tecken eller en lista med enskilda tecken. Varje trimning av inledande och avslutande tecken stoppas när ett icke-trimmat tecken påträffas.


## Examples

### Example #1
Ta bort inledande och avslutande blanksteg från " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Ta bort inledande och avslutande nollor från textrepresentationen av ett tal.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Ta bort inledande och avslutande hakparenteser från en HTML-tagg.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Ta bort de specialtecken som används runt den väntande försäljningsstatusen.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
