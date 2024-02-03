---
title: Json.FromValue
---

# Json.FromValue


## Description

Stvara JSON prikaz date vrednosti.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Stvara JSON predstavljanje date vrednosti <code>value</code> sa šifrovanjem teksta koji navodi <code>encoding</code>. Ako je <code>encoding</code> izostavljen, koristi se UTF8. Vrednosti se predstavljaju na sledeći način:<br /> <ul>        <li>Prazne, tekstualne i logičke vrednosti se predstavljaju kao odgovarajući JSON tipovi</li>        <li>Brojevi se predstavljaju kao brojevi u JSON-u, osim što se <code>#infinity</code>, <code>-#infinity</code> i <code>#nan</code> konvertuju u praznu vrednost</li>        <li>Liste se predstavljaju kao JSON nizovi</li>        <li>Zapisi se predstavljaju kao JSON objekti</li>        <li>Tabele se predstavljaju kao niz objekata</li>        <li>Datumi, vreme, datumi i vreme, vremenske zone i trajanja se predstavljaju kao ISO-8601 tekst</li>        <li>Binarne vrednosti se predstavljaju kao base-64 kodirani tekst</li>        <li>Tipovi i funkcije stvaraju grešku</li> </ul>    


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
