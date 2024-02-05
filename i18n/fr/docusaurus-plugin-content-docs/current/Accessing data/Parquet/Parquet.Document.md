---
title: Parquet.Document
---

# Parquet.Document


## Description

Retourne le contenu du document Parquet en tant que table.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Renvoie le contenu du document Parquet sous forme de tableau. Les options incluent :    <ul>    <li> <code>TypeMapping</code> : une valeur de texte qui contrôle le mappage de type par défaut lors de la lecture et de l'écriture de fichiers. La valeur par défaut est null et tente de conserver autant de fidélité que possible au type d'origine. Une valeur de "Sql" produira des résultats plus compatibles avec SQL Server.</li>    </ul>



## Category
Accès aux données
