---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


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


## Remarks

Combina le colonne specificate di `table` in una nuova colonna di record con valori denominata `newColumnName` in cui ogni record ha nomi di campo e valori corrispondenti ai nomi di colonna e ai valori delle colonne che sono state combinate. Se viene specificato un record per `options`, è possibile specificare le opzioni seguenti:

-   `DisplayNameColumn`: quando viene specificato come testo, indica che il nome della colonna specificato deve essere considerato come il nome visualizzato del record. Non deve essere una delle colonne nel record stesso.
-   `TypeName`: quando viene specificato come testo, fornisce un nome di tipo logico per il record risultante che può essere usato durante il caricamento dei dati per indirizzare il comportamento da parte dell'ambiente di caricamento.



## Category
Table.Transformation
