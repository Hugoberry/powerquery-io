---
title: Salesforce.Data
---

# Salesforce.Data


## Description

A Salesforce-fiókban található objektumokat adja vissza.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

A hitelesítő adatokban megadott Salesforce-fiókban található objektumokat adja vissza. A fiók a megadott környezeten (<code>loginUrl</code>) keresztül lesz csatlakoztatva. Ha nincs környezet megadva, a fiók az éles környezethez fog csatlakozni (https://login.salesforce.com). A(z) <code>options</code> választható rekordparaméter segítségével további tulajdonságok adhatók meg. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>CreateNavigationProperties</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a visszaadott &#233;rt&#233;kekhez l&#233;trej&#246;jjenek-e navig&#225;ci&#243;s tulajdons&#225;gok (az alap&#233;rtelmezett &#233;rt&#233;k a false, azaz hamis).</li><li><code>ApiVersion</code> : A Salesforce API jelen lek&#233;rdez&#233;sben haszn&#225;land&#243; verzi&#243;ja. Ha nincs megadva, a rendszer a 29.0-s verzi&#243;j&#250; API-t haszn&#225;lja.</li><li><code>Timeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;nak k&#252;ld&#246;tt k&#233;r&#233;st. Az alap&#233;rtelmezett &#233;rt&#233;k forr&#225;sspecifikus.</li></ul>    



## Category
Accessing data
