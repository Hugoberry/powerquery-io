---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Kombinerar de angivna kolumnerna till en ny postvärdeskolumn där varje post innehåller fältnamn och värden som motsvarar kolumnnamnen och värdena för de kolumner som kombinerats.


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

Kombinerar de angivna kolumnerna i `table` till en ny postvärdeskolumn med namnet `newColumnName` där varje post innehåller fältnamn och värden som motsvarar kolumnnamnen och värdena för de kolumner som kombinerats. Om en post har angetts för `options` kan följande alternativ anges:

-   `DisplayNameColumn`: När den anges som text, ska det angivna kolumnnamnet betraktas som postens visningnamn. Det här får inte vara en av kolumnerna i själva posten.
-   `TypeName`: När det anges som text tillhandahålls ett logiskt typnamn för den resulterande koden som kan användas under datainläsningen för att styra inläsningsmiljöns funktionssätt.



## Category
Table.Transformation
