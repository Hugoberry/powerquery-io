---
title: Table.Partition
---

# Table.Partition


## Description

Particiona a táboa nunha lista de táboas baseándose no número especificado de grupos e columnas.


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

Particiona a <code>table</code> nunha lista de <code>groups</code> números de táboas, baseándose no valor de <code>column</code> e da función <code>hash</code>.    A función <code>hash</code> aplícase ao valor da fila <code>column</code> para obter un valor hash para a fila. O módulo do valor hash <code>groups</code> determina en cal das táboas devoltas se vai colocar a fila.    <ul>       <li><code>table</code>: a táboa que se vai particionar.</li>       <li><code>column</code>: a columna de hash que vai determinar en que táboa devolta está a fila.</li>       <li><code>groups</code>: o número de táboas no que se vai particionar a táboa de entrada.</li>       <li><code>hash</code>: a función aplicada para obter un valor hash.</li>    </ul>  


## Examples

### Example #1 
Particionar a táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; en 2 táboas na columna [a], usando o valor das columnas como a función hash.
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
