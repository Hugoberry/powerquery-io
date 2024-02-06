---
title: List.MinN
---

# List.MinN


Retourneert de minimumwaarde(n) in de lijst. Het aantal te retourneren waarden of de filtervoorwaarde moet wellicht worden opgegeven.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Hiermee wordt de minimumwaarde(n) in de lijst, <code>list</code>    geretourneerd. De parameter, <code>countOrCondition</code>, geeft het aantal waarden dat moet worden geretourneerd of een filtervoorwaarde aan. De optionele parameter, <code>comparisonCriteria</code>, geeft aan hoe waarden in de lijst moeten worden vergeleken. <ul>        <li> <code>list</code>: de lijst met waarden.</li>        <li> <code>countOrCondition</code>: als een getal wordt opgegeven, wordt een lijst met maximaal <code>countOrCondition</code> items in oplopende volgorde geretourneerd. Als een voorwaarde is opgegeven, wordt een lijst geretourneerd met items die in eerste instantie aan de voorwaarde voldoen. Zodra een item niet aan de voorwaarde voldoet, worden geen verdere items meer behandeld. Als deze parameter null is, wordt de kleinste waarde in de lijst geretourneerd.</li><li><code>comparisonCriteria</code>: <i>[Optioneel]</i> Een optionele <code>comparisonCriteria</code>-waarde, kan worden opgegeven om te bepalen hoe de items in de lijst moeten worden vergeleken. Als deze parameter null is, wordt de standaardvergelijkingsfunctie gebruikt. </li></ul>


## Examples

### Example #1 
De vijf kleinste waarden in de lijst &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; zoeken.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
