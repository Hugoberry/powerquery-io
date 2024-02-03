---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Opretter en skalarfunktion oven på en vektorfunktion, så flere aktiveringer batchkøres.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Returnerer en skalarfunktion af typen <code>scalarFunctionType</code>, der kalder <code>vectorFunction</code> med en enkelt række argumenter og returnerer sit enkelte output. Og når skalarfunktion gentagne gange anvendes for hver række i en tabel med input, f.eks Table.AddColumn, anvendes <code>vectorFunction</code> i stedet på én gang for alle input. <br /><code>vectorFunction</code> vil blive overført til en tabel, hvor kolonnernes navn og placering matcher parametrene i <code>scalarFunctionType</code>. Hver række i denne tabel indeholder argumenterne til ét kald til skalarfunktionen med de kolonner, der svarer til parametrene for <code>scalarFunctionType</code>. <br /><code>vectorFunction</code> skal returnere en liste med samme længde som inputtabellen, hvis element på hver position skal være det samme resultat som evalueringen af skalarfunktionen i inputrækken på samme placering. <br />Inputtabellen forventes at blive streamet ind, så <code>vectorFunction</code> forventes at streame outputtet, når der kommer input ind, og skal kun arbejde med én portion af inputtet ad gangen. <code>vectorFunction</code> må især ikke optælle sin inputtabel mere end én gang.<br />



## Category
Function
