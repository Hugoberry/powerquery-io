---
title: List.MaxN
---

# List.MaxN


Retourneert de maximumwaarde(n) uit de lijst. Het aantal te retourneren waarden of de filtervoorwaarde moet worden opgegeven.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Hiermee wordt de maximumwaarde(n) in de lijst, <code>list</code>.    geretourneerd. Nadat de rijen zijn gesorteerd, kunnen optionele parameters worden opgegeven om het resultaat verder te filteren. De optionele parameter, <code>countOrCondition</code>, geeft het aantal waarden dat moet worden geretourneerd of een filtervoorwaarde aan. De optionele parameter, <code>comparisonCriteria</code>, geeft aan hoe waarden in de lijst moeten worden vergeleken. <ul>        <li> <code>list</code>: de lijst met waarden.</li>        <li> <code>countOrCondition</code>: als een getal wordt opgegeven, wordt een lijst met maximaal <code>countOrCondition</code> items in oplopende volgorde geretourneerd. Als een voorwaarde is opgegeven, wordt een lijst geretourneerd met items die in eerste instantie aan de voorwaarde voldoen. Zodra een item niet aan de voorwaarde voldoet, worden geen verdere items meer behandeld.</li><li><code>comparisonCriteria</code>: <i>[Optioneel]</i> Een optionele <code>comparisonCriteria</code>-waarde, kan worden opgegeven om te bepalen hoe de items in de lijst moeten worden vergeleken. Als deze parameter null is, wordt de standaardvergelijkingsfunctie gebruikt. </li></ul>



## Category
List.Ordering
