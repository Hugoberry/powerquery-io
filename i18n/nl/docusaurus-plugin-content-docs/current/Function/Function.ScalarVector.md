---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Hiermee wordt een scalaire functie gemaakt die op een vectorfunctie wordt uitgevoerd voor batchverwerking van meerdere aanroepen.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Hiermee wordt een scalaire functie van het type <code>scalarFunctionType</code> geretourneerd waarmee <code>vectorFunction</code> wordt aangeroepen via één rij met argumenten waarna één uitvoerwaarde wordt geretourneerd. Daarnaast wordt <code>vectorFunction</code> één keer toegepast op alle invoerwaarden wanneer de scalaire functie herhaaldelijk op elke rij van een tabel met invoerwaarden, zoals bij Table.AddColumn, wordt toegepast.<br />Er wordt aan <code>vectorFunction</code> een tabel doorgegeven met kolommen waarvan de naam en positie overeenkomen met de parameters van <code>scalarFunctionType</code>. Elke rij van deze tabel bevat de argumenten voor één aanroep van de scalaire functie, met de kolommen die overeenkomen met de parameters van <code>scalarFunctionType</code>.<br />Met <code>vectorFunction</code> moet een lijst worden geretourneerd met dezelfde lengte als de invoertabel waarvan items op elke positie hetzelfde resultaat moeten bevatten als de evaluatie met de scalaire functie van de invoerrij op dezelfde positie.<br />Voor de invoertabel wordt verwacht dat deze via streaming binnenkomt, waardoor voor <code>vectorFunction</code> wordt verwacht dat de uitvoer wordt gestreamd naarmate de invoer binnenkomt. Hierbij wordt één invoersegment tegelijk gebruikt. Het is met name belangrijk dat <code>vectorFunction</code> de eigen invoertabel niet vaker dan één keer opsomt.<br />



## Category
Function
