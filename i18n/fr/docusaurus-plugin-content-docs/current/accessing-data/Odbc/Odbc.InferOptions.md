---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Retourne le résultat de la tentative de déduction des fonctionnalités SQL pour un pilote ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Retourne le résultat de la tentative de déduction des fonctionnalités SQL avec la chaîne de connexion <code>connectionString</code> à l'aide d'ODBC. <code>connectionString</code> peut être du texte ou un enregistrement de paires propriété/valeur. Les valeurs de propriété peuvent être du texte ou un nombre.


## Examples

### Example #1 
Renvoie les capacités SQL déduites pour une chaîne de connexion.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
