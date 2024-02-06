---
title: Function.ScalarVector
---

# Function.ScalarVector


Skapar en skalärfunktion ovanpå en vektorfunktion vilket batchbearbetar flera anrop.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Returnerar en skalär funktion av typen <code>scalarFunctionType</code> som anropar <code>vectorFunction</code> med en enda rad med argument och returnerar sin enda utdata. Dessutom när skalärfunktionen upprepade gånger används för varje rad i en tabell med indata, till exempel i Table.AddColumn, kommer istället <code>vectorFunction</code> att användas en gång för alla indata.<br /><code>vectorFunction</code> skickas en tabell vars kolumner i namn och position matchar parametrarna för <code>scalarFunctionType</code>. Varje rad i den här tabellen innehåller argument för ett anrop till skalärfunktionen med de kolumner som motsvarar parametrarna för <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> måste returnera en lista med samma längd som indatatabellen vars objekt vid varje position måste vara samma resultat som utvärderar skalärfunktionen på indataraden för samma position.<br />Indatatabellen förväntas strömmas in så <code>vectorFunction</code> förväntas strömma sina utdata allteftersom indata kommer in och bara arbeta med ett segment indata åt gången. <code>vectorFunction</code> får specifikt inte räkna upp dess indatatabell mer än en gång.<br />



## Category
Function
