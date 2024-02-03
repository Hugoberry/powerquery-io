---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Az ODBC-adatforrásban elérhető SQL-táblák és -nézetek tábláját adja vissza. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

SQL-táblák és -nézetek tábláját adja vissza a(z) <code>connectionString</code> kapcsolati sztring által meghatározott ODBC-adatforrásból. A(z) <code>connectionString</code> szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságérték szöveg vagy szám lehet. A(z) <code>options</code> elhagyható rekordparaméterrel további tulajdonságok határozhatók meg. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a true (igaz)).</li><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a t&#225;bl&#225;k a s&#233;manevek szerint csoportos&#237;tva jelenjenek-e meg (az alap&#233;rtelmezett &#233;rt&#233;k a false (hamis)).</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k 15 m&#225;sodperc.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li><li><code>SqlCompatibleWindowsAuth</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely meghat&#225;rozza, hogy l&#233;trej&#246;jjenek-e SQL Server-kompatibilis kapcsolatisztring-be&#225;ll&#237;t&#225;sok a Windows-hiteles&#237;t&#233;shez. Az alap&#233;rtelmezett &#233;rt&#233;k true (igaz).</li></ul>


## Examples

### Example #1 
Az SQL-táblákat és -nézeteket küldi vissza a megadott kapcsolati sztringből.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
