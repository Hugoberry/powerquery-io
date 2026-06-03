---
title: Binary.View
---

# Binary.View


Hiermee wordt een binair bestand gemaakt of uitgebreid met door de gebruiker gedefinieerde handlers voor query- en actiebewerkingen.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Hiermee wordt een weergave van `binary` geretourneerd waarin de functies in `handlers` worden gebruikt in plaats van het standaardgedrag van een bewerking wanneer de bewerking op de weergave wordt toegepast.

Als `binary` is opgegeven, zijn alle handlerfuncties optioneel. Als `binary` niet is opgegeven, is de handlerfuncties `GetStream` vereist. Als er geen handlerfunctie voor een bewerking is opgegeven, wordt in plaats daarvan het standaardgedrag van de bewerking op `binary` toegepast (behalve bij `GetExpression`).

Handlerfuncties moeten een waarde retourneren die semantisch equivalent is aan het resultaat van het toepassen van de bewerking op `binary` (of de resulterende weergave bij `GetExpression`).

Als er met een handlerfunctie een fout wordt gegenereerd, wordt het standaardgedrag van de bewerking op de weergave toegepast.

`Binary.View` kan worden gebruikt om vouwen te implementeren naar een gegevensbron; de vertaling van M-query's naar bronspecifieke bewerkingen (bijvoorbeeld om een deel van een bestand te downloaden).

\\

Raadpleeg de gepubliceerde documentatie over de aangepaste connector van Power Query voor een uitgebreide beschrijving van `Binary.View`.


## Examples

### Example #1
Maak een basisweergave waarvoor geen toegang tot de gegevens is vereist om de lengte te bepalen.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
