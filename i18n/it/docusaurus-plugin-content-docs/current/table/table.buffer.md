---
title: Table.Buffer
---

# Table.Buffer


Memorizza nel buffer una tabella in memoria, isolandola da modifiche esterne durante la valutazione.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Memorizza nel buffer una tabella in memoria, isolandola da modifiche esterne durante la valutazione. Il buffering è superficiale. Forza la valutazione di tutti i valori scalari delle celle, ma lascia invariati i valori non scalari (record, elenchi, tabelle e così via).

-   `table`: tabella da memorizzare nel buffer in memoria.
-   `options`: (facoltativo) è possibile utilizzare i seguenti valori di record per le opzioni:
    -   `BufferMode`: modalità di buffer che descrive il tipo di buffering da eseguire. Questa opzione può essere `BufferMode.Eager` o `BufferMode.Delayed`.

L'uso di questa funzione può velocizzare o rallentare l'esecuzione delle query. In alcuni casi, può rallentarle a causa del aggiunto costo aggiuntivo di leggere tutti i dati e memorizzarli in memoria, oltre al fatto che il buffering impedisce la riduzione downstream. Se i dati non devono essere memorizzati nel buffer ma si vuole solo impedire la riduzione downstream, usare invece `Table.StopFolding`.


## Examples

### Example #1
Caricare in memoria tutte le righe di una tabella SQL, in modo che le operazioni downstream non siano più in grado di eseguire query sul server SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
