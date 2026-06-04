---
title: Table.Partition
---

# Table.Partition


Osioi taulukon taulukkoluetteloksi ryhmien määrän ja määritetyn sarakkeen perusteella.


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

Osioi kohteen `table` luetteloksi `groups` taulukkoa kohteen `column` ja funktion `hash` arvon perusteella. Funktiota `hash` käytetään rivin `column` arvolle, jotta saadaan rivin hajautusarvo. Hajautusarvon modulo `groups` määrittää, mihin palautetuista taulukoista rivi sijoitetaan.

-   `table`: osioitava taulukko.
-   `column`: sarake, josta määritetään hajautusarvo sen selvittämiseksi, missä palautetussa taulukossa rivi sijaitsee.
-   `groups`: niiden taulukoiden määrä, joihin syötetaulukko osioidaan.
-   `hash`: hajautusarvon saamiseksi käytettävä funktio.


## Examples

### Example #1
Osioi taulukko `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` kahdeksi taulukoksi sarakkeessa \[a\] käyttäen sarakkeiden arvoa hajautusfunktiona.
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
