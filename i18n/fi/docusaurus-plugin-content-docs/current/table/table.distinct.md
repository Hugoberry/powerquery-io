---
title: Table.Distinct
---

# Table.Distinct


Poistaa rivien kaksoiskappaleet taulukosta.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Poistaa rivien kaksoiskappaleet taulukosta. Valinnainen parametri `equationCriteria` määrittää, mitkä taulukon sarakkeet testataan kaksoiskappaleiden varalta. Jos kohdetta `equationCriteria` ei ole määritetty, kaikki sarakkeet testataan.  
  
Koska Power Query joskus purkaa tiettyjä toimintoja tietolähteiden taustaksi (kutsutaan “taittamiseksi”) ja joskus myös optimoi kyselyt ohittamalla toimintoja, jotka eivät ole täysin välttämättömiä, yleensä ei ole mitään takeita siitä, mikä tietty kaksoiskappale säilytetään. Et esimerkiksi voi olettaa, että ensimmäinen rivi, jolla on yksilöllinen sarakearvojoukko, säilyy, ja taulukon alempana olevat rivit poistetaan. Jos haluat kaksoiskappaleen poistamisen toimivan ennakoitavasti, puskuroi taulukko ensin käyttäen koodia `Table.Buffer`.


## Examples

### Example #1
Poista rivien kaksoiskappaleet taulukosta.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Poista rivien kaksoiskappaleet sarakkeesta \[b\] taulukossa `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
