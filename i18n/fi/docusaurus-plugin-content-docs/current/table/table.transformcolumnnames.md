---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Muuntaa sarakkeiden nimet käyttäen annettua funktiota.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Muuntaa sarakkeiden nimet käyttämällä annettua `nameGenerator` -toimintoa. Kelvolliset asetukset:

`MaxLength` määrittää uusien sarakkeiden nimien enimmäispituuden. Jos annetun funktion tuloksena on pidempi sarakkeen nimi, pitkä nimi rajataan.

`Vertailutoimintoa` käytetään ohjaamaan vertailua luotaessa uusia sarakkeiden nimiä. Vertailutoiminnoilla voidaan tarjota kirjainkoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailua.

Seuraavat sisäiset vertailutoiminnot ovat saatavilla kaavan kielellä:

-   `Comparer.Ordinal`: Käytetään tarkan järjestyslukuvertailun suorittamiseen
-   `Comparer.OrdinalIgnoreCase`: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen
-   `Comparer.FromCulture`: Käytetään maa-asetukset huomioivan vertailun suorittamiseen


## Examples

### Example #1
Poista merkki `#(tab)` sarakkeiden nimistä
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Muodosta nimiä, joiden kirjainkoko ei ole merkitsevä ja joiden pituus on 6, muuntamalla sarakkeen nimet.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
