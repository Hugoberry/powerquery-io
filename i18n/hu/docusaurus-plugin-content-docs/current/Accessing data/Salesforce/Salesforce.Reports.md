---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

A Salesforce-fiókban található jelentéseket adja vissza.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

A hitelesítő adatokban megadott Salesforce-fiókban található objektumokat adja vissza. A fiók a megadott környezeten (<code>loginUrl</code>) keresztül lesz csatlakoztatva. Ha nincs környezet megadva, a fiók az éles környezethez fog csatlakozni (https://login.salesforce.com). A(z) <code>options</code> választható rekordparaméter segítségével további tulajdonságok adhatók meg. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>ApiVersion</code> : A Salesforce API jelen lek&#233;rdez&#233;sben haszn&#225;land&#243; verzi&#243;ja. Ha nincs megadva, a rendszer a 29.0-s verzi&#243;j&#250; API-t haszn&#225;lja.</li><li><code>Timeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;nak k&#252;ld&#246;tt k&#233;r&#233;st. Az alap&#233;rtelmezett &#233;rt&#233;k forr&#225;sspecifikus.</li></ul>    



## Category
Accessing data
