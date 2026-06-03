---
title: Text.TrimEnd
---

# Text.TrimEnd


Rimuove tutti i caratteri finali specificati.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Restituisce il risultato della rimozione di tutti i caratteri finali dal `text`specificato. Per impostazione predefinita, tutti gli spazi vuoti finali vengono rimossi.

-   `text`: testo da cui devono essere rimossi i caratteri finali.
-   `trim`: esegue l'override degli spazi vuoti che vengono rimossi per impostazione predefinita. Questo parametro può essere un singolo carattere o un elenco di caratteri singoli. Ogni operazione di taglio finale viene interrotta quando viene rilevato un carattere non tagliato.


## Examples

### Example #1
Rimuovere gli spazi finali da " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Rimuove gli zeri finali da una rappresentazione di testo di un numero a virgola mobile riempita.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Rimuovere i caratteri di spaziatura interna finale da un nome di account a larghezza fissa.
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
