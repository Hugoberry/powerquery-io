---
title: Json.FromValue
---

# Json.FromValue


Létrehozza a megadott érték JSON-ábrázolását.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Létrehozza a megadott `value` érték JSON-ábrázolását a(z) `encoding` által meghatározott szövegkódolással. Ha a(z) `encoding` ki van hagyva, a rendszer az UTF8-at használja. Az értékek a következőképpen jelennek meg:

-   A null, szöveg és logikai értékek a nekik megfelelő JSON-típusokként jelennek meg.
-   A számok JSON-számokként jelennek meg, kivétel az `#infinity`, `-#infinity` és `#nan` elemek, amelyek null értékre konvertálódnak.
-   A listák JSON-tömbökként jelennek meg.
-   A rekordok JSON-objektumokként jelennek meg
-   A táblák objektumok tömbjeiként jelennek meg.
-   A dátumok, időpontok, dátum/idő értékek, dátum/időzónák és az időtartamok ISO-8601 szövegként jelennek meg.
-   A bináris értékek base-64 kódolású szövegként jelennek meg.
-   A típusok és függvények hibát okoznak.


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
