---
title: Table.Buffer
---

# Table.Buffer


## Description

Memorizza nel buffer una tabella in memoria, isolandola da modifiche esterne durante la valutazione.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Memorizza nel buffer una tabella, isolandola dalle modifiche esterne durante la valutazione.   Il buffering è un’azione superficiale. Forza la valutazione di qualsiasi valore di cella scalare, ma lascia valori non scalari (record, elenchi, tabelle e così via) così come sono.     <br />    <br />    Si noti che l'utilizzo di questa funzione potrebbe velocizzare o meno l'esecuzione delle query. In alcuni casi, può rendere le query più lente a causa dell'aggiunta     della lettura di tutti i dati e dell'archiviazione in memoria. Inoltre, il buffering impedisce il downstream folding. Se i dati non hanno bisogno di essere   memorizzati nel buffer, ma vuoi prevenire il downstream folding, usa <code>Table.StopFolding</code>.


## Examples

### Example #1 
Caricare in memoria tutte le righe di una tabella SQL, in modo che le operazioni downstream non siano più in grado di eseguire query sul server SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
