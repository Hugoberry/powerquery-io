---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Trasforma i nomi di colonna usando la funzione specificata.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Trasforma i nomi di colonna usando la funzione <code>nameGenerator</code> specificata. Opzioni valide: <div> <code>MaxLength</code> specifica la lunghezza massima dei nomi delle nuove colonne. Se la funzione specificata restituisce un nome di colonna più lungo, il nome lungo verrà tagliato. </div> <div> <code>Operatore di confronto</code> viene usato per controllare il confronto durante la generazione di nuovi nomi di colonna. Gli operatori di confronto possono essere usati per fornire confronti con distinzione tra maiuscole e minuscole oppure confronti in grado di riconoscere le impostazioni cultura e locali. </div> <div> Nel linguaggio delle formule sono disponibili gli operatori di confronto predefiniti seguenti: </div> <ul> <li><code>Comparer.Ordinal</code>:  usato per eseguire un confronto ordinale esatto</li> <li><code>Comparer.OrdinalIgnoreCase</code>: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole</li> <li><code>Comparer.FromCulture</code>: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura e locali</li> </ul>


## Examples

### Example #1 
Rimuovere il carattere &lt;code&gt;#(tab)&lt;/code&gt; dai nomi di colonna
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Consente di trasformare i nomi di colonna per generare nomi senza distinzione tra maiuscole e minuscole della lunghezza di 6 caratteri.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
