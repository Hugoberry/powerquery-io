---
title: List.Alternate
---

# List.Alternate


Retourneert een lijst die bestaat uit alle oneven intervalelementen in een lijst.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Retourneert een lijst die bestaat uit alle oneven intervalelementen in een lijst. Wisselt af tussen het gebruiken en overslaan van waarden uit de lijst <code>list</code> afhankelijk van de parameters.    <ul>    <li><code>count</code>: specificeert het aantal waarden dat elke keer wordt overgeslagen.</li>    <li><code>repeatInterval</code>: een optioneel herhalingsinterval om aan te geven hoeveel waarden tussen de overgeslagen waarden worden toegevoegd.</li>    <li><code>offset</code>: een optieparameter voor intervallen om met het overslaan van waarden te beginnen bij het eerste interval.</li>    </ul>


## Examples

### Example #1 
Een lijst van \{1..10} maken waarbij het eerste getal wordt overgeslagen.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Een lijst van \{1..10} maken waarbij getallen om en om worden overgeslagen.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Een lijst van \{1..10} maken die begint bij 1 en waarbij getallen om en om worden overgeslagen.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Een lijst van \{1..10} maken die begint bij 1, één waarde overslaat, twee waarden behoudt, enzovoort.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
