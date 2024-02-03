---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Muuntaa sarakkeiden nimet käyttäen annettua funktiota.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Muuntaa sarakkeiden nimet käyttämällä annettua <code>nameGenerator</code> -toimintoa. Kelvolliset asetukset:    <div>      <code>MaxLength</code> määrittää uusien sarakkeiden nimien enimmäispituuden. Jos annetun funktion tuloksena on pidempi sarakkeen nimi, pitkä nimi rajataan.    </div>    <div>      <code>Vertailutoimintoa</code> käytetään ohjaamaan vertailua luotaessa uusia sarakkeiden nimiä. Vertailutoiminnoilla voidaan tarjota kirjainkoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailua.    </div>    <div>      Seuraavat sisäiset vertailutoiminnot ovat saatavilla kaavan kielellä:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Käytetään tarkan järjestyslukuvertailun suorittamiseen</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen</li><li> <code> Comparer.FromCulture</code>: Käytetään maa-asetukset huomioivan vertailun suorittamiseen</li>    </ul>     


## Examples

### Example #1 
Poista merkki &lt;code&gt;#(tab)&lt;/code&gt; sarakkeiden nimistä
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
