---
title: Table.Partition
---

# Table.Partition


Partiziona la tabella in un elenco di tabelle in base al numero di gruppi e alla colonna specificati.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partiziona <code>table</code> in un elenco di <code>groups</code> tabelle in base al valore di <code>column</code> e alla funzione <code>hash</code>.    La funzione <code>hash</code> viene applicata al valore della riga <code>column</code> per ottenere un valore hash per la riga. Il modulo del valore hash <code>groups</code> determina la tabella restituita in cui verrà inserita la riga.    <ul>       <li><code>table</code>: tabella da partizionare.</li>       <li><code>column</code>: colonna di cui eseguire l'hashing per determinare la tabella restituita in cui si trova la riga.</li>       <li><code>groups</code>: numero di tabelle in cui verrà partizionata la tabella di input.</li>       <li><code>hash</code>: funzione applicata per ottenere un valore hash.</li>    </ul>  


## Examples

### Example #1 
Partizionare la tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; in 2 tabelle nella colonna [a], utilizzando il valore delle colonne come funzione hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
