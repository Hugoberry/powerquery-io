---
title: Text.TrimStart
---

# Text.TrimStart


Rimuove tutti i caratteri iniziali specificati.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Restituisce il risultato della rimozione di tutti i caratteri iniziali dal `text`specificato. Per impostazione predefinita, tutti gli spazi vuoti iniziali vengono rimossi.

-   `text`: testo da cui devono essere rimossi i caratteri iniziali.
-   `trim`: esegue l'override degli spazi vuoti che vengono rimossi per impostazione predefinita. Questo parametro può essere un singolo carattere o un elenco di caratteri singoli. Ogni operazione di taglio iniziale viene interrotta quando viene rilevato un carattere non tagliato.


## Examples

### Example #1
Rimuovere gli spazi iniziali da " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Rimuove gli zeri iniziali dalla rappresentazione di testo di un numero.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Rimuovere i caratteri di spaziatura interna iniziali da un nome di account a larghezza fissa.
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
