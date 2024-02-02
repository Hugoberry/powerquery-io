---
title: Json.FromValue
---

# Json.FromValue


## Description

Produit une représentation JSON d&#39;une valeur donnée.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Produit une représentation JSON d'une valeur donnée <code>value</code> avec un codage de texte spécifié par <code>encoding</code>. Si <code>encoding</code> est omis, UTF8 est utilisé. Les valeurs sont représentées comme suit :<br /> <ul>        <li>Les valeurs null, texte et logiques sont représentées par les types JSON correspondants</li>        <li>Les nombres sont représentés en tant que tels dans JSON, sauf que <code>#infinity</code>, <code>-#infinity</code> et <code>#nan</code> sont convertis en valeur null</li>        <li>Les listes sont représentées sous forme de tableaux JSON</li>        <li>Les enregistrements sont représentés sous forme d'objets JSON</li>        <li>Les tables sont représentées sous forme de tableaux d'objets</li>        <li>Les dates, heures, dates/heures, dates/fuseaux horaires et les durées sont représentés sous forme de texte ISO-8601</li>        <li>Les valeurs binaires sont représentées sous forme de texte codé en base 64</li>        <li>Les types et les fonctions génèrent une erreur</li> </ul>


## Examples

### Example #1 
Convertissez une valeur complexe en valeur JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
