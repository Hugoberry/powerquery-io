---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Memetakan `table` kepada senarai `groups` bilangan jadual, berdasarkan pada nilai `column` dan fungsi `hash`. Fungsi `hash` digunakan pada nilai baris `column` untuk mendapatkan nilai hash bagi baris. Modulo nilai hash `groups` menentukan dalam jadual mana yang dikembalikan baris tersebut akan diletakkan.

-   `table`: Jadual untuk dipetakan.
-   `column`: Lajur untuk dihash untuk menentukan baris berada dalam jadual mana yang dikembalikan.
-   `groups`: Bilangan jadual yang jadual input tersebut akan dipetakan.
-   `hash`: Fungsi digunakan untuk mendapatkan nilai hash.


## Examples

### Example #1
Petakan jadual `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` kepada 2 jadual pada lajur \[a\], menggunakan nilai lajur sebagai fungsi hash.
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
