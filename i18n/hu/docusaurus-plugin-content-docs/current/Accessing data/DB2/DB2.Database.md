---
title: DB2.Database
---

# DB2.Database


## Description

A Db2-adatbázisban elérhető SQL-táblák és nézetek tábláját adja vissza.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

A(z) <code>database</code> nevű adatbázispéldányban, <code>server</code> kiszolgálón lévő Db2-adatbázisban elérhető SQL-táblák és nézetek tábláját adja vissza. A portot lehetősége van megadni a kiszolgálóval együtt, kettősponttal elválasztva. Megadható egy választható <code>options</code> rekordparaméter a következő beállítások meghatározásához:     <ul><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a true (igaz)).</li><li><code>NavigationPropertyNameGenerator</code> : A navig&#225;ci&#243;s tulajdons&#225;gok nev&#233;nek l&#233;trehoz&#225;s&#225;ra haszn&#225;lhat&#243; f&#252;ggv&#233;ny.</li><li><code>Query</code> : Adatok lek&#233;r&#233;s&#233;re haszn&#225;lt nat&#237;v SQL-lek&#233;rdez&#233;s. Ha a lek&#233;rdez&#233;s t&#246;bb tal&#225;lathalmazt is eredm&#233;nyez, a rendszer csak az elsőt adja vissza.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k az illesztőtől f&#252;gg.</li><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a t&#225;bl&#225;k a s&#233;manevek szerint csoportos&#237;tva jelenjenek-e meg (az alap&#233;rtelmezett &#233;rt&#233;k a false (hamis)).</li><li><code>Implementation</code> : Megadja a haszn&#225;lni k&#237;v&#225;nt belső adatb&#225;zisszolg&#225;ltat&#243;i implement&#225;ci&#243;t. Az &#233;rv&#233;nyes &#233;rt&#233;kek az IBM &#233;s a Microsoft.</li><li><code>BinaryCodePage</code> : Olyan sz&#225;m, amely a CCSID (Coded Character Set Identifier) alapj&#225;n DB2 FOR BIT bin&#225;ris adatokat karakterl&#225;ncokra dek&#243;dol. Akkor haszn&#225;lhat&#243;, ha az implement&#225;ci&#243; &#233;rt&#233;ke „Microsoft”. 0-ra &#225;ll&#237;tva kikapcsolhatja az &#225;talak&#237;t&#225;st (ez az alap&#233;rtelmezett be&#225;ll&#237;t&#225;s). 1 &#233;rt&#233;kre &#225;ll&#237;tva adatb&#225;zis-k&#243;dol&#225;s alapj&#225;n t&#246;rt&#233;nik az &#225;talak&#237;t&#225;s. M&#225;s CCSID-sz&#225;mra &#225;ll&#237;tva a rendszer alkalmaz&#225;sk&#243;dol&#225;sra alak&#237;t &#225;t.</li><li><code>PackageCollection</code> : Meghat&#225;roz egy sztring&#233;rt&#233;ket a csomagok gyűjt&#233;s&#233;hez (alap&#233;rtelmezett &#233;rt&#233;k: NULLID), amely lehetőv&#233; teszi az SQL-utas&#237;t&#225;sok feldolgoz&#225;s&#225;hoz sz&#252;ks&#233;ges megosztott csomagok haszn&#225;lat&#225;t. Microsoft &#233;rt&#233;kű implement&#225;ci&#243; eset&#233;n &#233;rv&#233;nyes.</li><li><code>UseDb2ConnectGateway</code> : Meghat&#225;rozza, hogy a kapcsolat egy DB2 Connect-&#225;tj&#225;r&#243;n kereszt&#252;l t&#246;rt&#233;njen-e. A Microsoft implement&#225;ci&#243;ra vonatkozik.</li></ul>    A rekordparaméter például a következők szerint adható meg: [lehetőség1 = érték1, lehetőség2 = érték2...] vagy például [Query = "select ..."].    



## Category
Accessing data
