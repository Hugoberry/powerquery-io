---
title: Table.View
---

# Table.View


Hiermee wordt een tabel gemaakt of uitgebreid met door de gebruiker gedefinieerde handlers voor query- en actiebewerkingen.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Hiermee wordt een weergave van <code>table</code> geretourneerd waarin de functies in <code>handlers</code> worden gebruikt in plaats van het standaardgedrag van een bewerking wanneer de bewerking op de weergave wordt toegepast.<br />Als <code>table</code> is opgegeven, zijn alle handlerfuncties optioneel. Als <code>table</code> niet is opgegeven, zijn de handlerfuncties <code>GetType</code> en <code>GetRows</code> vereist. Als er geen handlerfunctie voor een bewerking is opgegeven, wordt in plaats daarvan het standaardgedrag van de bewerking op <code>table</code> toegepast (behalve bij <code>GetExpression</code>).<br />Handlerfuncties moeten een waarde retourneren die semantisch equivalent is aan het resultaat van het toepassen van de bewerking op <code>table</code> (of de resulterende weergave bij <code>GetExpression</code>).<br />Als er met een handlerfunctie een fout wordt gegenereerd, wordt het standaardgedrag van de bewerking op de weergave toegepast.<br /><code>Table.View</code> kan worden gebruikt om vouwen te implementeren naar een gegevensbron; de vertaling van M-query's naar bronspecifieke query's (bijvoorbeeld om T-SQL-instructies op basis van M-query's te maken).<br />\Raadpleeg de gepubliceerde documentatie over de aangepaste connector van Power Query voor een uitgebreide beschrijving van <code>Table.View</code>.<br />


## Examples

### Example #1 
Maak een basisweergave waarvoor geen toegang tot de rijen is vereist om het type of het aantal rijen te bepalen.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
