---
title: Table.Partition
---

# Table.Partition


## Description

Memetakan jadual kepada senarai jadual berdasarkan bilangan kumpulan dan lajur yang ditentukan.


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

Memetakan <code>table</code> kepada senarai <code>groups</code> bilangan jadual, berdasarkan pada nilai <code>column</code> dan fungsi <code>hash</code>.    Fungsi <code>hash</code> digunakan pada nilai baris <code>column</code> untuk mendapatkan nilai hash bagi baris. Modulo nilai hash <code>groups</code> menentukan dalam jadual mana yang dikembalikan baris tersebut akan diletakkan.    <ul>       <li><code>table</code>: Jadual untuk dipetakan.</li>       <li><code>column</code>: Lajur untuk dihash untuk menentukan baris berada dalam jadual mana yang dikembalikan.</li>       <li><code>groups</code>: Bilangan jadual yang jadual input tersebut akan dipetakan.</li>       <li><code>hash</code>: Fungsi digunakan untuk mendapatkan nilai hash.</li>    </ul>  


## Examples

### Example #1 
Petakan jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; kepada 2 jadual pada lajur [a], menggunakan nilai lajur sebagai fungsi hash.
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
