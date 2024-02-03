---
title: List.Modes
---

# List.Modes


## Description

Retourneert een lijst met de waarden die het meest voorkomen in de andere lijst.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Hiermee wordt het item geretourneerd dat het vaakst in de lijst wordt weergegeven, <code>list</code>. Als de lijst leeg is, wordt een uitzondering geretourneerd. Als meerdere items worden weergegeven met dezelfde maximumfrequentie, wordt de laatste gekozen. Een optionele <code>comparisonCriteria</code>-waarde, <code>equationCriteria</code>, kan worden opgegeven voor het aansturen van gelijkheidstesten. 


## Examples

### Example #1 
De items worden opgegeven die het meeste voorkomen in de lijst &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
