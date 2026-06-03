---
title: List.Mode
---

# List.Mode


Returnerar det vanligast förekommande värdet i listan.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Returnerar det objekt som förekommer oftast i `list`. Om listan är tom genereras ett fel. Om flera objekt visas med samma maximala frekvens väljs den sista. Ett valfritt värde för jämförelsevillkor, `equationCriteria`, kan anges för att kontrollera likhetstestning.


## Examples

### Example #1
Hitta det objekt som förekommer oftast i listan, `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Hitta det objekt som förekommer oftast i listan, `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
