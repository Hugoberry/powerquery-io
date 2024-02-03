---
title: MySQL.Database
---

# MySQL.Database


## Description

Egy MySQL-adatbázisban elérhető SQL-táblák és -nézetek, valamint tárolt skaláris függvények tábláját adja vissza.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

A(z) <code>database</code> nevű adatbázispéldányban, a(z) <code>server</code> kiszolgálón lévő MySQL-adatbázisban elérhető SQL-táblák, nézetek és tárolt skaláris függvények tábláját adja vissza. A portot megadhatja a kiszolgálóval együtt, kettősponttal elválasztva. Egy opcionális rekordparaméterrel (<code>options</code>) meghatározhatja a következő beállításokat:    <ul><li><code>Encoding</code> : Egy TextEncoding &#233;rt&#233;k, amely a kiszolg&#225;l&#243;ra k&#252;ld&#246;tt &#246;sszes lek&#233;rdez&#233;s k&#243;dol&#225;s&#225;hoz haszn&#225;lt karakterk&#233;szletet hat&#225;rozza meg (az alap&#233;rtelmezett &#233;rt&#233;ke null).</li><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a true (igaz)).</li><li><code>NavigationPropertyNameGenerator</code> : A navig&#225;ci&#243;s tulajdons&#225;gok nev&#233;nek l&#233;trehoz&#225;s&#225;ra haszn&#225;lhat&#243; f&#252;ggv&#233;ny.</li><li><code>Query</code> : Adatok lek&#233;r&#233;s&#233;re haszn&#225;lt nat&#237;v SQL-lek&#233;rdez&#233;s. Ha a lek&#233;rdez&#233;s t&#246;bb tal&#225;lathalmazt is eredm&#233;nyez, a rendszer csak az elsőt adja vissza.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k az illesztőtől f&#252;gg.</li><li><code>TreatTinyAsBoolean</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely meghat&#225;rozza, hogy logikai &#233;rt&#233;kekk&#233;nt k&#233;nyszer&#237;ti-e a tinyint-oszlopokat. Az alap&#233;rtelmezett &#233;rt&#233;k az igaz.</li><li><code>OldGuids</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely be&#225;ll&#237;tja, hogy a char(36)-oszlopokat (ha hamis) vagy a binary(16)-oszlopokat (ha igaz) kezelje-e GUID-k&#233;nt a rendszer. Az alap&#233;rtelmezett &#233;rt&#233;k a hamis.</li><li><code>ReturnSingleDatabase</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely be&#225;ll&#237;tja, hogy a rendszer az &#246;sszes adatb&#225;zis &#246;sszes t&#225;bl&#225;j&#225;t adja vissza (ha hamis), vagy a megadott adatb&#225;zis t&#225;bl&#225;it &#233;s n&#233;zeteit adja vissza (ha igaz). Az alap&#233;rtelmezett &#233;rt&#233;k a hamis.</li><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a t&#225;bl&#225;k a s&#233;manevek szerint csoportos&#237;tva jelenjenek-e meg (az alap&#233;rtelmezett &#233;rt&#233;k a false (hamis)).</li></ul>    A rekordpareméter például a következőképpen határozható meg: [option1 = value1, option2 = value2...] vagy [Query = "select ..."].    



## Category
Accessing data
