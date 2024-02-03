---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Ylentää ensimmäisen arvorivin uusiksi sarakeotsikoiksi (eli sarakkeiden nimiksi).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Ylentää ensimmäisen arvorivin uusiksi sarakeotsikoiksi (eli sarakkeiden nimiksi). Kaikkien ensimmäisen rivin solujen on sisällettävä tekstiä tai lukuarvoja. Kelvolliset vaihtoehdot:    <div>      <code>PromoteAllScalars</code>: jos asetus on <code>true</code>, kaikki ensimmäisen rivin skalaariarvot ylennetään otsikoiksi käyttäen kohdetta <code>Culture</code>, jos se on määritetty (tai nykyistä tiedoston maa-asetusta).    Jos arvoja ei voi muuntaa tekstiksi, käytetään oletusarvon mukaista sarakkeen nimeä.    </div>    <div>    <code>Culture</code>: maa-asetuksen nimi, joka määrittää tietojen maa-asetuksen.    </div>  


## Examples

### Example #1 
Ylennä ensimmäinen arvorivi taulukossa.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Ylennä kaikki taulukon ensimmäisen rivin skalaariarvot otsikoiksi.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
