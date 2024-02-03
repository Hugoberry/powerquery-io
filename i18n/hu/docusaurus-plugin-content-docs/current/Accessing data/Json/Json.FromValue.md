---
title: Json.FromValue
---

# Json.FromValue


## Description

Létrehozza a megadott érték JSON-ábrázolását.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Létrehozza a megadott <code>value</code> érték JSON-ábrázolását a(z) <code>encoding</code> által meghatározott szövegkódolással. Ha a(z) <code>encoding</code> ki van hagyva, a rendszer az UTF8-at használja. Az értékek a következőképpen jelennek meg:<br /> <ul>        <li>A null, szöveg és logikai értékek a nekik megfelelő JSON-típusokként jelennek meg.</li>        <li>A számok JSON-számokként jelennek meg, kivétel az <code>#infinity</code>, <code>-#infinity</code> és <code>#nan</code> elemek, amelyek null értékre konvertálódnak.</li>        <li>A listák JSON-tömbökként jelennek meg.</li>        <li>A rekordok JSON-objektumokként jelennek meg.</li>        <li>A táblák objektumok tömbjeiként jelennek meg.</li>        <li>A dátumok, időpontok, dátum/idő értékek, dátum/időzónák és az időtartamok ISO-8601 szövegként jelennek meg.</li>        <li>A bináris értékek base-64 kódolású szövegként jelennek meg.</li>        <li>A típusok és függvények hibát okoznak.</li> </ul>    


## Examples

### Example #1 
Összetett érték konvertálása JSON formátumúvá.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
