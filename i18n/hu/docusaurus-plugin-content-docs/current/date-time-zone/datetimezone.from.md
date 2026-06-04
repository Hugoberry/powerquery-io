---
title: DateTimeZone.From
---

# DateTimeZone.From


Létrehoz egy datetimezone értéket a megadott értékből.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Létrehoz egy `datetimezone` értéket a megadott értékből.

-   `value`: A `datetimezone` létrehozásához használt érték.
-   `culture`: (nem kötelező) Az érték átalakításakor használandó kulturális beállítás (például „hu-HU”).

A következő típusok értékei konvertálhatók `datetimezone` értékké:

-   `text`: Szöveges ábrázolásból származó `datetimezone` értéket ad vissza. A részletekért lásd: `DateTimeZone.FromText`.
-   `date`: egy `datetimezone` értéket ad vissza, ahol `value` a dátumösszetevő, `12:00:00 AM` az időösszetevő, és az eltolás a helyi időzónának felel meg.
-   `datetime`: Egy `datetimezone` értéket ad vissza, ahol `value` a datetime, és az eltolás a helyi időzónának felel meg.
-   `datetimezone`: `value` értéket ad vissza.
-   `time`: Egy `datetimezone` értéket ad vissza, ahol a dátum az `0` OLE automatizálási dátum dátum-megfelelője a dátumösszetevő, `value` az időösszetevő, és az eltolás a helyi időzónának felel meg. Az OLE automatizálási dátum egy lebegőpontos számból áll, amelynek egész összetevője az 1899. december 30. éjfél előtti vagy utáni napok száma, és amelynek tört összetevője az adott napon eltöltött idő 24-gyel elosztva. Az 1899. december 31. éjfélt például 1.0 jelöli; 1900. január 1. 06:00-t a 2.25 jelöli; 1899. december 29. éjfélt -1,0; és 1899. december 29. 06.00.-t -1.25 jelöli. Az alapérték 1899. december 30. éjfél. A minimális érték éjfél, január 1., 0100. A maximális érték 9999. december 31. utolsó pillanata.
-   `number`: Egy `datetimezone` értéket ad vissza a(z) `value` által kifejezett OLE automatizálási dátum datetime megfelelőjével és a helyi időzónának megfelelő eltolással.
-   `null`: `null` értéket ad vissza.

Ha `value` bármilyen más típusú, a rendszer hibát ad vissza.  
  
A helyi időzónának megfelelő eltolás értéke más a függvény helyi futtatásakor, mint online futtatáskor. Helyi futtatás esetén a helyi időzónát adja vissza. Online futtatás esetén az UTC időzónát (+00:00) adja vissza.


## Examples

### Example #1
Egy dátum, idő és időzóna szöveges ábrázolásának átalakítása `datetimezone` értékre.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Egy brazíliai portugál dátum, idő és időzóna szöveges ábrázolásának átalakítása `datetimezone` értékre.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
2025\. január 1. 12:00 órát jelölő szám átalakítása `datetimezone` értékké. Az eredmény időzónája attól függ, hogy a példa helyileg vagy online fut-e.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
