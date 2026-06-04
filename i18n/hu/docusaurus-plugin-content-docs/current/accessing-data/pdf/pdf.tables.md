---
title: Pdf.Tables
---

# Pdf.Tables


Egy PDF-fájlban talált táblákat ad vissza.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

A következőben található összes táblát visszaadja: `pdf`. Megadható egy választható rekordparaméter (`options`) további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:

-   `Implementation` : A táblák azonosításához használandó algoritmus verziója. A régi verziók csak a visszamenőleges kompatibilitás érdekében érhetők el, hogy a régi lekérdezések ne váljanak használhatatlanná az algoritmusfrissítések miatt. Mindig a legújabb verziónak kell a legjobb eredményt adnia. Az érvényes értékek a következők: „1.3”, „1.2”, „1.1“ vagy null.
-   `StartPage` : Meghatározza a vizsgálandó oldaltartomány első oldalát. Alapértelmezett érték: 1.
-   `EndPage` : Meghatározza a vizsgálandó oldaltartomány utolsó oldalát. Alapértelmezett érték: a dokumentum utolsó oldala.
-   `MultiPageTables` : Meghatározza, hogy az egymást követő lapokon lévő, hasonló táblák automatikusan egyesítve lesznek-e egyetlen táblába. Alapértelmezett érték: igaz.
-   `EnforceBorderLines` : Meghatározza, hogy a szegélyvonalakat mindig cellahatárként használja-e a rendszer (ha igaz), vagy hogy több más végrehajtási módosítóval együtt használja őket a cellahatárok meghatározásához (ha hamis). Alapértelmezett érték: hamis.


## Examples

### Example #1
Visszaadja a sample.pdf fájlban található táblázatokat.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Adatok elérése
