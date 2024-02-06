---
title: List.Average
---

# List.Average


Retourneert het gemiddelde van de waarden. Werkt met waarden voor getal, datum, datum/tijd, datum-/tijdzone en duur.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Retourneert de gemiddelde waarde van de items in de lijst, <code>list</code>. Het resultaat wordt gegeven in hetzelfde gegevenstype als de waarden in de lijst. Werkt alleen met waarden voor getal, datum, tijd, datum/tijd, datum-/tijdzone en duur.    Als de lijst leeg is, wordt null geretourneerd.


## Examples

### Example #1 
Het gemiddelde zoeken van de lijst met getallen, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Het gemiddelde zoeken van de datumwaarden 1 januari, 2011, 2 januari, 2011 en 3 januari, 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
