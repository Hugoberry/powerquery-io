---
title: Smartsheet.Tables
---

# Smartsheet.Tables


Retourne une table des feuilles, rapports, dossiers et espaces de travail à partir de l&#39;API Smartsheet


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Remarks

Retourne une table imbriquée des feuilles, rapports, dossiers et espaces de travail disponibles à partir de l'API Smartsheet.


## Examples

### Example #1 
Retourne les feuilles, dossiers, rapports et espaces de travail disponibles au niveau supérieur de la hiérarchie Smartsheet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Table des dossiers, rapports et espaces de travail du niveau supérieur de la hiérarchie Smartsheet
```



