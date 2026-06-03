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

Partiziona `table` in un elenco di `groups` tabelle in base al valore di `column` e alla funzione `hash`. La funzione `hash` viene applicata al valore della riga `column` per ottenere un valore hash per la riga. Il modulo del valore hash `groups` determina la tabella restituita in cui verrà inserita la riga.

-   `table`: tabella da partizionare.
-   `column`: colonna di cui eseguire l'hashing per determinare la tabella restituita in cui si trova la riga.
-   `groups`: numero di tabelle in cui verrà partizionata la tabella di input.
-   `hash`: funzione applicata per ottenere un valore hash.


## Examples

### Example #1
Partizionare la tabella `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` in 2 tabelle nella colonna \[a\], utilizzando il valore delle colonne come funzione hash.
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
