---
title: Table.Partition
---

# Table.Partition


Partitionér tabellen til en liste over tabeller baseret på antallet af grupper og den angivne kolonne.


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

Partitionér <code>table</code> til en liste over <code>groups</code> antal tabeller baseret på værdien i <code>column</code> og en funktion af typen <code>hash</code>.    Funktionen <code>hash</code> anvendes på værdien i rækken <code>column</code> for at få en hashværdi for rækken. Hashværdiens modulus <code>groups</code> bestemmer, hvilken af de returnerede tabeller rækken placeres i.    <ul>       <li><code>table</code>: Den tabel, der skal partitioneres.</li>       <li><code>column</code>: Den kolonne, der skal indeholde en hashværdi, for at afgøre, hvilken returneret tabel rækken placeres i.</li>       <li><code>groups</code>: Antallet af tabeller, som inputtabellen partitioneres til.</li>       <li><code>hash</code>: Den funktion, der anvendes for at opnå en hashværdi.</li>    </ul>  


## Examples

### Example #1 
Partitionér tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; til to tabeller i kolonne [a] ved at bruge værdien i kolonnerne som hashfunktion.
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
