---
title: Table.Partition
---

# Table.Partition


Deli tabelu na listu tabela na osnovu broja grupa i navedene kolone.


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

Deli `table` na listu `groups` broja tabela na osnovu vrednosti koju ima `column` i funkcije `hash`. Funkcija `hash` se primenjuje na vrednost reda `column` da bi se dobila vrednost heša za red. Modulo vrednosti heša `groups` određuje u koju vraćenu tabelu će red biti smešten.

-   `table`: Tabela koja se deli.
-   `column`: Kolona na osnovu koje je dobijen heš da bi se odredilo u kojoj vraćenoj tabeli se red nalazi.
-   `groups`: Broj tabela na koje će ulazna tabela biti podeljena.
-   `hash`: Funkcija koja se primenjuje da bi se dobila vrednost heša.


## Examples

### Example #1
Deljenje tabele `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` na 2 tabele u koloni \[a\] koristeći vrednost kolona kao heš funkciju.
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
