---
title: Table.Partition
---

# Table.Partition


Razdeli tabelo v seznam tabel glede na število navedenih skupin in stolpcev.


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

Razdeli tabelo `table` v seznam `groups` tabel glede na vrednost vrstice `column` in funkcijo `hash`. Funkcija `hash` se uporabi za vrednost vrstice `column`, da se pridobi razpršilna vrednost za vrstico. Modul razpršilne vrednosti `groups` določa, v katero od vrnjenih tabel bo vstavljena vrstica.

-   `table`: tabela, ki bo razdeljena.
-   `column`: stolpec, ki bo razpršen za določanje, katera vrnjena tabela vsebuje vrstico.
-   `groups`: število tabel, v katere bo razdeljena vhodna tabela.
-   `hash`: funkcija, uporabljena za pridobitev razpršilne vrednosti.


## Examples

### Example #1
Razdelite tabelo `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` v 2 tabeli v stolpcu \[a\], tako da uporabite vrednost stolpcev kot razpršilni algoritem.
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
