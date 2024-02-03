---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Az OLE DB-adatforrásból származó SQL-táblák és nézetek tábláját adja vissza.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

SQL-táblák és -nézetek tábláját adja vissza a(z) <code>connectionString</code> kapcsolati sztring által meghatározott OLE DB-adatforrásból. A(z) <code>connectionString</code> szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságértékek szövegek vagy számok lehetnek. Megadható egy <code>options</code> választható rekordparaméter további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a true (igaz)).</li><li><code>NavigationPropertyNameGenerator</code> : A navig&#225;ci&#243;s tulajdons&#225;gok nev&#233;nek l&#233;trehoz&#225;s&#225;ra haszn&#225;lhat&#243; f&#252;ggv&#233;ny.</li><li><code>Query</code> : Adatok lek&#233;r&#233;s&#233;re haszn&#225;lt nat&#237;v SQL-lek&#233;rdez&#233;s. Ha a lek&#233;rdez&#233;s t&#246;bb tal&#225;lathalmazt is eredm&#233;nyez, a rendszer csak az elsőt adja vissza.</li><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a t&#225;bl&#225;k a s&#233;manevek szerint csoportos&#237;tva jelenjenek-e meg (az alap&#233;rtelmezett &#233;rt&#233;k a true, azaz igaz).</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k az illesztőtől f&#252;gg.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li><li><code>SqlCompatibleWindowsAuth</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely meghat&#225;rozza, hogy l&#233;trej&#246;jjenek-e SQL Server-kompatibilis kapcsolatisztring-be&#225;ll&#237;t&#225;sok a Windows-hiteles&#237;t&#233;shez. Az alap&#233;rtelmezett &#233;rt&#233;k true (igaz).</li></ul>    A rekordparaméter meghatározása lehet például [option1 = value1, option2 = value2…] vagy [Query = "select ..."].



## Category
Accessing data
