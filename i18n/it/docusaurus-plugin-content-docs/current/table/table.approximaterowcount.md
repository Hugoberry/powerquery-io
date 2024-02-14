---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Restituisce il numero approssimativo di righe nella tabella.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Restituisce il numero approssimativo di righe nel <code>table</code>o un errore se l'origine dati non supporta l'approssimazione.


## Examples

### Example #1 
Stimare il numero di combinazioni distinte di città e stato in una tabella di grandi dimensioni, che può essere usata come stima di cardinalità per le colonne. Le stime della cardinalità sono sufficientemente importanti da supportare questa particolare approssimazione da parte di diverse origini dati, ad esempio SQL Server, spesso usando un algoritmo denominato HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
