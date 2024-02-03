---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Razdeli tabelo <code>table</code> v seznam <code>groups</code> tabel glede na vrednost vrstice <code>column</code> in funkcijo <code>hash</code>.    Funkcija <code>hash</code> se uporabi za vrednost vrstice <code>column</code>, da se pridobi razpršilna vrednost za vrstico. Modul razpršilne vrednosti <code>groups</code> določa, v katero od vrnjenih tabel bo vstavljena vrstica.    <ul>       <li><code>table</code>: tabela, ki bo razdeljena.</li>       <li><code>column</code>: stolpec, ki bo razpršen za določanje, katera vrnjena tabela vsebuje vrstico.</li>       <li><code>groups</code>: število tabel, v katere bo razdeljena vhodna tabela.</li>       <li><code>hash</code>: funkcija, uporabljena za pridobitev razpršilne vrednosti.</li>    </ul>  


## Examples

### Example #1 
Razdelite tabelo &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; v 2 tabeli v stolpcu [a], tako da uporabite vrednost stolpcev kot razpršilni algoritem.
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
