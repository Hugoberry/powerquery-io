---
title: List.IsEmpty
---

# List.IsEmpty


Returnează true dacă lista este necompletată.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Returnează `true` dacă lista, `list`, nu conţine valori (lungime 0). Dacă lista conţine valori (lungime > 0), returnează `false`.


## Examples

### Example #1
Aflaţi dacă lista \{\} este necompletată.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Aflaţi dacă lista \{1, 2\} este necompletată.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
