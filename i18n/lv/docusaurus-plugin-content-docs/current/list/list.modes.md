---
title: List.Modes
---

# List.Modes


Tiek atgriezts saraksts, kurā ir ietvertas sarakstā visbiežāk lietotās vērtības.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Atgriež vienumus, kas visbiežāk tiek rādīti `list`. Ja saraksts ir tukšs, tiks izraisīta kļūda. Ja vairāki vienumi tiek parādīti ar vienādu maksimālo biežumu, tiek atgriezti visi vienumi. Var norādīt papildu salīdzināšanas kritēriju vērtību `equationCriteria`, lai kontrolētu vienādības pārbaudi.


## Examples

### Example #1
Iegūstiet sarakstā `{"A", 1, 2, 3, 3, 4, 5, 5}` visbiežāk lietotos vienumus.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
