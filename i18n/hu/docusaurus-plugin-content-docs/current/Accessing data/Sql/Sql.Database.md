---
title: Sql.Database
---

# Sql.Database


## Description

Az SQL Server-adatbázisban elérhető SQL-táblák és -nézetek, valamint tárolt függvények tábláját adja vissza.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

A(z) <code>server</code> kiszolgálón található <code>database</code>SQL Server-adatbázisban elérhető SQL-táblák és -nézetek, valamint tárolt függvények tábláját adja vissza. A portot megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. Megadható egy választható rekordparaméter (<code>options</code>) a következő beállítások meghatározásához:    <ul><li><code>Query</code> : Adatok lek&#233;r&#233;s&#233;re haszn&#225;lt nat&#237;v SQL-lek&#233;rdez&#233;s. Ha a lek&#233;rdez&#233;s t&#246;bb tal&#225;lathalmazt is eredm&#233;nyez, a rendszer csak az elsőt adja vissza.</li><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a true (igaz)).</li><li><code>NavigationPropertyNameGenerator</code> : A navig&#225;ci&#243;s tulajdons&#225;gok nev&#233;nek l&#233;trehoz&#225;s&#225;ra haszn&#225;lhat&#243; f&#252;ggv&#233;ny.</li><li><code>MaxDegreeOfParallelism</code> : A l&#233;trehozott SQL-lek&#233;rdez&#233;sben tal&#225;lhat&#243; maxdop lek&#233;rdez&#233;si z&#225;rad&#233;k &#233;rt&#233;k&#233;t meghat&#225;roz&#243; sz&#225;m.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k az illesztőtől f&#252;gg.</li><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a t&#225;bl&#225;k a s&#233;manevek szerint csoportos&#237;tva jelenjenek-e meg (az alap&#233;rtelmezett &#233;rt&#233;k a false (hamis)).</li><li><code>MultiSubnetFailover</code> : Egy logikai (igaz/hamis) &#233;rt&#233;k, amely meghat&#225;rozza a „MultiSubnetFailover” tulajdons&#225;g &#233;rt&#233;k&#233;t a kapcsolati sztringben (az alap&#233;rtelmezett &#233;rt&#233;k a hamis).</li><li><code>UnsafeTypeConversions</code> : Logikai (igaz/hamis) &#233;rt&#233;k. Ha Igaz, akkor a rendszer megk&#237;s&#233;rli &#225;tadni a t&#237;puskonverzi&#243;kat, ami sikertelen lehet, &#233;s a teljes lek&#233;rdez&#233;s meghi&#250;sul&#225;s&#225;t okozhatja. &#193;ltal&#225;nos haszn&#225;latra nem javasolt.</li><li><code>ContextInfo</code> : Az egyes parancsok futtat&#225;sa előtt a CONTEXT_INFO be&#225;ll&#237;t&#225;s&#225;hoz haszn&#225;lt bin&#225;ris &#233;rt&#233;k.</li><li><code>OmitSRID</code> : Logikai (igaz/hamis) &#233;rt&#233;k. Ha Igaz, akkor a rendszer kihagyja az SRID azonos&#237;t&#243;t Well-Known Text form&#225;tum&#250; sz&#246;veg geometriai vagy f&#246;ldrajzi t&#237;pusokb&#243;l val&#243; elő&#225;ll&#237;t&#225;sakor.</li><li><code>EnableCrossDatabaseFolding</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely igaz &#233;rt&#233;k eset&#233;n enged&#233;lyezi az adatb&#225;zisok k&#246;z&#246;tti lek&#233;rdez&#233;s&#225;tad&#225;st ugyanazon a kiszolg&#225;l&#243;n. Az alap&#233;rtelmezett &#233;rt&#233;k a hamis.</li></ul>    A rekordparaméter például a következők szerint adható meg: [lehetőség1 = érték1, lehetőség2 = érték2...] vagy például [Query = "select ..."].    



## Category
Accessing data
