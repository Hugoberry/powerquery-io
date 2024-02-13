---
title: List.Mode
---

# List.Mode


Retourneert de meest voorkomende waarde uit de lijst.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Hiermee wordt het item geretourneerd dat het vaakst in de lijst wordt weergegeven, <code>list</code>. Als de lijst leeg is, wordt een uitzondering geretourneerd. Als meerdere items worden weergegeven met dezelfde maximumfrequentie, wordt de laatste gekozen. Een optionele <code>comparisonCriteria</code>-waarde, <code>equationCriteria</code>, kan worden opgegeven voor het aansturen van gelijkheidstesten. 


## Examples

### Example #1 
Het item opzoeken dat het meest voorkomt in de lijst &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Het item opzoeken dat het meest voorkomt in de lijst &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
