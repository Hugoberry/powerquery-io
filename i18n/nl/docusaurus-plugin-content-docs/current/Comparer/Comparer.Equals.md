---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Retourneert een logische waarde op basis van de gelijkheidscontrole tussen de twee gegeven waarden.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Hiermee wordt een <code>logische</code> waarde geretourneerd op basis van de gelijkheidscontrole over de twee opgegeven waarden, <code>x</code> en <code>y</code>, met behulp van de opgegeven <code>comparer</code>.      <div>        <code>comparer</code> is een <code>vergelijker</code> die wordt gebruikt voor het aansturen van de vergelijking.        Een vergelijker is een functie die twee argumenten accepteert en -1, 0, of 1 retourneert op basis van of de eerste waarde kleiner dan, gelijk aan of groter is dan de tweede.        Vergelijkers kunnen gebruikt worden om hoofdletterongevoelige of cultuur- en lokalisatiebewuste vergelijkingen te maken.      </div>      <div>        De volgende ingebouwde vergelijkers zijn beschikbaar in de formuletaal:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: wordt gebruikt om een exacte, rangtelwoordelijke vergelijking uit te voeren</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: wordt gebruikt om een exacte, rangtelwoordelijke en hoofdletterongevoelige vergelijking uit te voeren</li>        <li> <code>Comparer.FromCulture</code>: wordt gebruikt om een cultuurbewuste vergelijking uit te voeren</li>      </ul>


## Examples

### Example #1 
Vergelijk 1 en A aan de hand van de landinstelling en-US om te bepalen of de waarden gelijk zijn.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
