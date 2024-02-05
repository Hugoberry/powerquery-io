---
title: Parquet.Document
---

# Parquet.Document


## Description

Restituisce il contenuto del documento Parquet come tabella.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Restituisce i contenuti del documento Parquet come tabella. Le opzioni includono:    <ul>    <li> <code>TypeMapping</code> : un valore di testo che controlla il mapping del tipo predefinito durante la lettura e la scrittura di file. Il valore predefinito è Null e cerca di essere il più fedele possibile al tipo originale. Un valore di "Sql" produrrà risultati più compatibili con SQL Server.</li>    </ul>



## Category
Accesso ai dati
