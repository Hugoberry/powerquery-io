---
title: List.Mode
---

# List.Mode


Tiek atgriezta sarakstā visbiežāk lietotā vērtība.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Tiek atgriezts vienums, kas visbiežāk tiek rādīts `list`. Ja saraksts ir tukšs, tiks izraisīta kļūda. Ja vairāki vienumi tiek parādīti ar vienādu maksimālo biežumu, tiek izvēlēts pēdējais vienums. Var norādīt papildu salīdzināšanas kritēriju vērtību `equationCriteria`, lai kontrolētu vienādības pārbaudi.


## Examples

### Example #1
Iegūstiet sarakstā `{"A", 1, 2, 3, 3, 4, 5}` visbiežāk lietoto vienumu.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Iegūstiet sarakstā `{"A", 1, 2, 3, 3, 4, 5, 5}` visbiežāk lietoto vienumu.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
