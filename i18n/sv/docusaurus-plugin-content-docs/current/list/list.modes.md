---
title: List.Modes
---

# List.Modes


Returnerar en lista med de vanligast förekommande värdena i listan.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerar de objekt som förekommer oftast i `list`. Om listan är tom genereras ett fel. Om flera objekt visas med samma maximala frekvens returneras alla. Ett valfritt värde för jämförelsevillkor, `equationCriteria`, kan anges för att kontrollera likhetstestning.


## Examples

### Example #1
Hitta de objekt som förekommer oftast i listan, `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
