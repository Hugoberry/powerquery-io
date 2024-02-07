---
title: Zucchetti.Contents
---

# Zucchetti.Contents



## Syntax

```powerquery
Zucchetti.Contents(
    Url as text,
    Environment as text
) as table
```


## Remarks

Il retourne les contenus des VisualQuery (vqr), des rapports ou des fonctions publiées par le logiciel Zucchetti HR


## Examples

### Example #1 
Requête pour la liste des salariés
```powerquery
    Zucchetti.Contents("https://myurl/HRPortal/", "001"),
    ERM = Origine{[idproced="ERM"]}[Data],
    ERM_query_pbi_employee = ERM{[id="ERM_query_pbi_employee"]}[Data]
```

Result: 
```powerquery
    Table containing employee list
```



