---
title: Json.FromValue
---

# Json.FromValue


## Description

Tiek izveidots noteiktas vērtības JSON apliecinājums.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Sniedz attiecīgās vērtības <code>value</code> JSON attēlojumu ar teksta kodējumu, ko norāda <code>encoding</code>. Ja vērtība <code>encoding</code> ir izlaista, tiek izmantots UTF8. Vērtības tiek attēlotas šādi:<br /> <ul>        <li>Null, teksta un loģiskās vērtības tiek attēlotas kā atbilstošie JSON tipi</li>        <li>Skaitļi JSON tiek attēloti kā skaitliskas vērtības, izņemot vērtības <code>#infinity</code>, <code>-#infinity</code> un <code>#nan</code>, kuras tiek konvertētas uz null</li>        <li>Saraksti tiek attēloti kā JSON masīvi</li>        <li>Ieraksti tiek attēloti kā JSON objekti</li>        <li>Tabulas tiek attēlotas kā objektu masīvs</li>        <li>Datumu, laika, datuma un laika, datuma un laika joslu un ilguma vērtības tiek attēlotas kā ISO-8601 teksts</li>        <li>Binārās vērtības tiek attēlotas kā teksts, kurš iekodēts ar bāzi 64</li>        <li>Tipi un funkcijas izraisa kļūdu</li> </ul>    


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
