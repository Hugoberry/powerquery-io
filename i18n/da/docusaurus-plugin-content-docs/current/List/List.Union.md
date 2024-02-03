---
title: List.Union
---

# List.Union


## Description

Returnerer foreningen for de listeværdier, der blev fundet i inputtet.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Anvender en liste over lister <code>lists</code>, opretter foreninger for elementer på de enkelte lister og returnerer dem på outputlisten. Den returnerede liste indeholder derfor alle elementer på en hvilken som helst inputliste.    Denne handling bevarer den traditionelle multimængdesemantik, så dublerede værdier sammenlignes som led i foreningen.     Du kan angive en valgfri kriterieværdi for ligningen, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Opret en forening for listen \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
