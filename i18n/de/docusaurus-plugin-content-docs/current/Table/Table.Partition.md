---
title: Table.Partition
---

# Table.Partition


## Description

Unterteilt die Tabelle auf der Grundlage der Gruppenanzahl und der angegebenen Spalte in eine Liste mit Tabellen.


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

Unterteilt das Element vom Typ "<code>table</code>" in eine Liste mit der angegebenen Anzahl von Tabellen (<code>groups</code>) auf der Grundlage des Werts für "<code>column</code>" und einer Funktion vom Typ "<code>hash</code>".    Die Funktion "<code>hash</code>" wird auf den Wert der Zeile "<code>column</code>" angewendet, um einen Hashwert für die Zeile abzurufen. Das Hashwertmodulo "<code>groups</code>" bestimmt, in welcher der zurückgegebenen Tabellen die Zeile platziert wird.    <ul>       <li><code>table</code>: Die aufzuteilende Tabelle.</li>       <li><code>column</code>: Die Spalte, für die ein Hashwert erstellt werden soll, um zu bestimmen, in welcher zurückgegebenen Tabelle sich die Zeile befindet.</li>       <li><code>groups</code>: Die Anzahl von Tabellen, in die die Eingabetabelle unterteilt wird.</li>       <li><code>hash</code>: Die zum Erstellen eines Hashwerts angewendete Funktion.</li>    </ul>  


## Examples

### Example #1 
Unterteilt die Tabelle &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; auf der Grundlage von Spalte &#34;[a]&#34; in zwei Tabellen, wobei der Wert der Spalten als Hashfunktion verwendet wird.
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
