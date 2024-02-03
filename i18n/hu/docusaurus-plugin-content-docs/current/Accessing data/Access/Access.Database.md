---
title: Access.Database
---

# Access.Database


## Description

Az Access-adatbázisok szerkezeti ábrázolását adja vissza.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Visszaadja egy Access-adatbázis (<code>database</code>) szerkezeti ábrázolását. Egy választható rekordparaméter adható meg (<code>options</code>) a következő beállítások meghatározásához:    <ul><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a false, azaz hamis).</li><li><code>NavigationPropertyNameGenerator</code> : A navig&#225;ci&#243;s tulajdons&#225;gok nev&#233;nek l&#233;trehoz&#225;s&#225;ra haszn&#225;lhat&#243; f&#252;ggv&#233;ny.</li></ul>    Például a rekordparaméter meghatározása lehet [option1 = value1, option2 = value2…].



## Category
Accessing data
