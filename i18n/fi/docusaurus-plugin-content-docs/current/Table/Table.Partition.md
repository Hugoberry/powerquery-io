---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Osioi kohteen <code>table</code> luetteloksi <code>groups</code> taulukkoa kohteen <code>column</code> ja funktion <code>hash</code> arvon perusteella.    Funktiota <code>hash</code> käytetään rivin <code>column</code> arvolle, jotta saadaan rivin hajautusarvo. Hajautusarvon modulo <code>groups</code> määrittää, mihin palautetuista taulukoista rivi sijoitetaan.    <ul>       <li><code>table</code>: osioitava taulukko.</li>       <li><code>column</code>: sarake, josta määritetään hajautusarvo sen selvittämiseksi, missä palautetussa taulukossa rivi sijaitsee.</li>       <li><code>groups</code>: niiden taulukoiden määrä, joihin syötetaulukko osioidaan.</li>       <li><code>hash</code>: hajautusarvon saamiseksi käytettävä funktio.</li>    </ul>  


## Examples

### Example #1 
Osioi taulukko &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; kahdeksi taulukoksi sarakkeessa [a] käyttäen sarakkeiden arvoa hajautusfunktiona.
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
