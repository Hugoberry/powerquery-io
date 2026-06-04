---
title: Json.FromValue
---

# Json.FromValue


Stvara JSON prikaz date vrednosti.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Stvara JSON predstavljanje date vrednosti `value` sa šifrovanjem teksta koji navodi `encoding`. Ako je `encoding` izostavljen, koristi se UTF8. Vrednosti se predstavljaju na sledeći način:

-   Prazne, tekstualne i logičke vrednosti se predstavljaju kao odgovarajući JSON tipovi
-   Brojevi se predstavljaju kao brojevi u JSON-u, osim što se `#infinity`, `-#infinity` i `#nan` konvertuju u praznu vrednost
-   Liste se predstavljaju kao JSON nizovi
-   Zapisi su predstavljeni kao JSON objekti
-   Tabele se predstavljaju kao niz objekata
-   Datumi, vreme, datumi i vreme, vremenske zone i trajanja se predstavljaju kao ISO-8601 tekst
-   Binarne vrednosti se predstavljaju kao base-64 kodirani tekst
-   Tipovi i funkcije stvaraju grešku


## Examples

### Example #1
Konvertujte složenu vrednost u JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
