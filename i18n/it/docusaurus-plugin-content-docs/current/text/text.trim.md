---
title: Text.Trim
---

# Text.Trim


Rimuove tutti i caratteri iniziali e finali specificati.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Restituisce il risultato della rimozione di tutti i caratteri iniziali e finali dal `text` specificato. Per impostazione predefinita, tutti gli spazi vuoti iniziali e finali vengono rimossi.

-   `text`: testo da cui devono essere rimossi i caratteri iniziali e finali.
-   `trim`: esegue l'override degli spazi vuoti che vengono rimossi per impostazione predefinita. Questo parametro può essere un singolo carattere o un elenco di caratteri singoli. Ogni operazione di taglio iniziale e finale viene interrotta quando viene rilevato un carattere non tagliato.


## Examples

### Example #1
Rimuovere gli spazi iniziali e finali da " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Rimuove gli zeri iniziali e finali dalla rappresentazione di testo di un numero.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Rimuove le parentesi iniziali e finali da un tag HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Rimuovere i caratteri speciali utilizzati per lo stato delle vendite in sospeso.
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
