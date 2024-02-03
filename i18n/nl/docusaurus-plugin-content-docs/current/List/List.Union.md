---
title: List.Union
---

# List.Union


## Description

Retourneert de samenvoeging van de lijstwaarden die in de invoer zijn gevonden.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Hiermee wordt een lijst met lijsten <code>lists</code> gebruikt, worden de items in de afzonderlijke lijsten gecombineerd en worden deze in de uitvoerlijst geretourneerd. De geretourneerde lijst bevat hierdoor alle items in alle invoerlijsten. Deze bewerking houdt traditionele bag-semantiek aan. Dubbele waarden worden gekoppeld als onderdeel van de combinatie. Een optionele vergelijkingscriteriawaarde, <code>equationCriteria</code>, kan worden opgegeven voor het aansturen van gelijkheidstesten. 


## Examples

### Example #1 
Een samenvoeging van de lijst \{1..5}, \{2..6}, \{3..7} maken.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
