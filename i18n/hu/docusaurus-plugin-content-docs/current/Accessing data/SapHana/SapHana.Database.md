---
title: SapHana.Database
---

# SapHana.Database


## Description

Egy SAP HANA-adatbázis csomagjait adja vissza.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Többdimenziós csomagok tábláját adja vissza a(z) <code>server</code> SAP HANA-adatbázisból. Megadható egy választható rekordparaméter (<code>options</code>) a következő beállítások meghatározásához:    <ul><li><code>Query</code> : Adatok lek&#233;r&#233;s&#233;re haszn&#225;lt nat&#237;v SQL-lek&#233;rdez&#233;s. Ha a lek&#233;rdez&#233;s t&#246;bb tal&#225;lathalmazt is eredm&#233;nyez, a rendszer csak az elsőt adja vissza.</li><li><code>Distribution</code> : Egy SapHanaDistribution, amely a „Distribution” tulajdons&#225;g &#233;rt&#233;k&#233;t adja meg a kapcsolati sztringben. Az utas&#237;t&#225;s-&#250;tvonaltervez&#233;s egy olyan m&#243;dszer, amellyel ki lehet &#233;rt&#233;kelni egy elosztott rendszer megfelelő kiszolg&#225;l&#243;-csom&#243;pontj&#225;t az utas&#237;t&#225;s v&#233;grehajt&#225;sa előtt. Az alap&#233;rtelmezett &#233;rt&#233;k a SapHanaDistribution.All.</li><li><code>Implementation</code> : Megadja a haszn&#225;land&#243; SAP HANA &#246;sszek&#246;tő implement&#225;ci&#243;j&#225;t.</li><li><code>EnableColumnBinding</code> : Az adatok lek&#233;r&#233;sekor egy SAP HANA eredm&#233;nyhalmaz oszlopaihoz k&#246;ti a v&#225;ltoz&#243;kat. A valamivel magasabb mem&#243;riakihaszn&#225;lts&#225;g &#225;r&#225;n esetleges javul&#225;s &#233;rhető el a teljes&#237;tm&#233;nyben. Az alap&#233;rtelmezett &#233;rt&#233;k hamis.</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k 15 m&#225;sodperc.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li></ul>    



## Category
Accessing data
