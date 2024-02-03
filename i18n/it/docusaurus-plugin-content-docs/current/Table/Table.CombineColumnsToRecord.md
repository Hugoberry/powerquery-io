---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Combina le colonne specificate in una nuova colonna di record con valori in cui ogni record ha nomi di campo e valori corrispondenti ai nomi di colonna e ai valori delle colonne che sono state combinate.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Combina le colonne specificate di <code>table</code> in una nuova colonna di record con valori denominata <code>newColumnName</code> in cui ogni record ha nomi di campo e valori corrispondenti ai nomi di colonna e ai valori delle colonne che sono state combinate. Se viene specificato un record per <code>options</code>, è possibile specificare le opzioni seguenti:    <ul>     <li> <code>DisplayNameColumn</code>: quando viene specificato come testo, indica che il nome della colonna specificato deve essere considerato come il nome visualizzato del record. Non deve essere una delle colonne nel record stesso.</li>     <li> <code>TypeName</code>: quando viene specificato come testo, fornisce un nome di tipo logico per il record risultante che può essere usato durante il caricamento dei dati per indirizzare il comportamento da parte dell'ambiente di caricamento.</li>    </ul>



## Category
Table.Transformation
