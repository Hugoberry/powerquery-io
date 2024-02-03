---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Lisää uuden sarakkeen, jonka edustavat arvot on hankittu taulukon määritetyn sarakkeen arvojen sumean ryhmittelyn avulla.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Lisää uuden sarakkeen <code>newColumnName</code> kohteeseen <code>table</code> edustavilla arvoilla <code>columnName</code>. Edustajat saadaan sumealla kohteen <code>columnName</code> kunkin rivin arvojen vastaavuudella.    Valinnainen <code>options</code>-joukko voidaan määrittää avainsarakkeiden vertaamista varten. Vaihtoehtoja ovat seuraavat:     <ul><li><code>Culture</code> : Sallii tietueiden ryhmittelyn kulttuurikohtaisten s&#228;&#228;nt&#246;jen perusteella. Se voi olla mik&#228; tahansa kelvollinen maa-asetuksen nimi. Esimerkiksi maa-asetus ja-JP ryhmittelee tietueet japanilaisen kulttuurin perusteella. Oletusarvo on &quot;&quot;, joka ryhmittelee invariantin englantilaisen kulttuurin perusteella.</li><li><code>IgnoreCase</code> : Looginen arvo (tosi/ep&#228;tosi), joka sallii kirjainkoosta riippumattoman avainryhmittelyn. Esimerkiksi kun arvo on tosi, Viiniryp&#228;leet ja viiniryp&#228;leet ryhmitelll&#228;&#228;n yhteen. Oletusarvo on tosi.</li><li><code>IgnoreSpace</code> : Looginen arvo (tosi/ep&#228;tosi), joka sallii tekstiosien yhdist&#228;misen ryhmi&#228; etsitt&#228;ess&#228;. Esimerkiksi kun arvo on tosi, Viini ryp&#228;leet ja Viiniryp&#228;leet ryhmitelll&#228;&#228;n yhteen. Oletusarvo on tosi.</li><li><code>SimilarityColumnName</code> : Sen sarakkeen nimi, joka n&#228;ytt&#228;&#228; sy&#246;tearvon ja kyseist&#228; sy&#246;tett&#228; edustavan arvon samankaltaisuuden. Oletusarvo on tyhj&#228;arvo, joten uutta saraketta samankaltaisuuksia varten ei lis&#228;t&#228;.</li><li><code>Threshold</code> : Luku v&#228;lilt&#228; 0,00–1,00, joka m&#228;&#228;ritt&#228;&#228; samankaltaisuuspistem&#228;&#228;r&#228;n, jolla kaksi arvoa ryhmitell&#228;&#228;n. Esimerkiksi “Viiniryp&#228;leet” ja “viniryp&#228;leet” (i-kirjain puuttuu) on ryhmitelty yhteen vain, jos t&#228;m&#228;n asetuksen arvo on pienempi kuin 0,90. Raja-arvo 1,00 sallii vain tarkat vastaavuudet. (Huomaa, ett&#228; sumea “tarkka vastaavuus” saattaa ohittaa erot, kuten kirjainkoon, sanaj&#228;rjestyksen ja v&#228;limerkit.)  Oletusarvo on 0,80.</li><li><code>TransformationTable</code> : Taulukko, joka sallii tietueiden ryhmittelemisen mukautettujen arvojen yhdist&#228;mism&#228;&#228;ritysten perusteella. Sen tulee sis&#228;lt&#228;&#228; sarakkeet from ja to. Esimerkiksi viiniryp&#228;leet on ryhmitelty rusinoiden kanssa, jos muuntamistaulukossa on annettu &quot;from&quot;-sarake, joka sis&#228;lt&#228;&#228; viiniryp&#228;leet ja &quot;to&quot;-sarake, joka sis&#228;lt&#228;&#228; &quot;rusinat&quot;. Huomaa, ett&#228; muunnosta k&#228;ytet&#228;&#228;n kaikkiin muunnostaulukon tekstin esiintymiin. Edell&#228; mainitulla muunnostaulukolla &quot;ryp&#228;leet ovat makeita&quot; ryhmitell&#228;&#228;n my&#246;s lauseen &quot;rusinat ovat makeita&quot; kanssa.</li></ul><br />    


## Examples

### Example #1 
Etsi työntekijöiden sijainnin edustavat arvot.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
