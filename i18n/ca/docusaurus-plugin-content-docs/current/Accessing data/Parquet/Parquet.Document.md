---
title: Parquet.Document
---

# Parquet.Document


## Description

Retorna els continguts del document Parquet com a taula.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Retorna els continguts del document Parquet com a taula. Les opcions inclouen:
    <ul>
    <li> <code>TypeMapping</code> : un valor de text que controla l'assignació de tipus per defecte en llegir i escriure fitxers. El valor per defecte és nul i intenta conservar tanta fidelitat com sigui possible del tipus original. Un valor de l'"SQL" produirà els resultats més compatibles amb l'SQL Server.</li>
    </ul>



## Category
Accés a les dades
