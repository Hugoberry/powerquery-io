---
title: Table.Partition
---

# Table.Partition


## Description

Partitionerar tabellen i en lista med tabeller baserat på angivet antalet grupper och kolumner.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Partitionerar <code>table</code> till en lista med <code>groups</code> tabeller, baserat på värdet för <code>column</code> och en <code>hash</code>-funktion.    Funktionen <code>hash</code> körs på värdet för raden <code>column</code> för att få fram ett hash-värde för raden. Hash-värdets modulo, <code>groups</code>, avgör i vilken av de returnerade tabellerna som raden placeras i.    <ul>       <li><code>table</code>: Tabellen som ska partitioneras.</li>       <li><code>column</code>: Kolumnen som hash-beräkningen ska köras på för att avgöra vilken returnerad tabell som raden finns i.</li>       <li><code>groups</code>: Antalet tabeller som indatatabellen ska partitioneras i.</li>       <li><code>hash</code>: Funktionen som körs för att få fram ett hash-värde.</li>    </ul>  


## Examples

### Example #1 
Partitionera tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; i 2 tabeller för kolumnen [a] och använd kolumnernas värde som hash-funktionen.
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
