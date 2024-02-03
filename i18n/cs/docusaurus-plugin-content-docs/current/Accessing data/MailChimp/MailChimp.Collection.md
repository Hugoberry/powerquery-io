---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Vrátí tabulku s daty z koncového bodu MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Zavolá rozhraní API MailChimp a vrátí výslednou sadu dat jako tabulku. Automaticky stránkuje všemi výsledky. Pro koncové body rozhraní API lze použít volitelný parametr entityName, pokud se kořenový koncový bod a hlavní název entity v odpovědi JSON neshodují.


## Examples

### Example #1 
Vyžádá si tabulku dat z koncového bodu lists rozhraní API MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Tabulka s daty lists
```


### Example #2 
Vyžádá si tabulku dat z koncového bodu campaign-folders rozhraní API MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Tabulka s daty campaign-folders
```



