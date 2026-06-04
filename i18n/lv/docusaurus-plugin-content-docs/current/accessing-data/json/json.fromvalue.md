---
title: Json.FromValue
---

# Json.FromValue


Tiek izveidots noteiktas vērtības JSON apliecinājums.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Sniedz attiecīgās vērtības `value` JSON attēlojumu ar teksta kodējumu, ko norāda `encoding`. Ja vērtība `encoding` ir izlaista, tiek izmantots UTF8. Vērtības tiek attēlotas šādi:

-   Null, teksta un loģiskās vērtības tiek attēlotas kā atbilstošie JSON tipi
-   Skaitļi JSON tiek attēloti kā skaitliskas vērtības, izņemot vērtības `#infinity`, `-#infinity` un `#nan`, kuras tiek konvertētas uz null
-   Saraksti tiek attēloti kā JSON masīvi
-   Ieraksti tiek attēloti kā JSON objekti
-   Tabulas tiek attēlotas kā objektu masīvs
-   Datumu, laika, datuma un laika, datuma un laika joslu un ilguma vērtības tiek attēlotas kā ISO-8601 teksts
-   Binārās vērtības tiek attēlotas kā teksts, kurš iekodēts ar bāzi 64
-   Tipi un funkcijas izraisa kļūdu


## Examples

### Example #1
Pārvērst komplekso vērtību par JSON vērtību.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
