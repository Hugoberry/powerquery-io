---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Visszaadja egy 1 hosszúságú lista egyetlen elemét, illetve üres lista esetén az alapértelmezett értéket.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Ha csak egy elem szerepel a(z) <code>list</code> listán, a függvény azt az elemet adja vissza.    Ha a lista üres, és nincs megadva egy nem kötelező <code>default</code> érték, a függvény nullértéket ad vissza. Ha több elem szerepel a listán, a függvény hibát ad vissza.


## Examples

### Example #1 
A(z) \{1} lista egyetlen értékének megkeresése
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Az \{} lista egyetlen értékének megkeresése
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Az \{} lista egyetlen értékének megkeresése, illetve -1 érték visszaadása üres lista esetén
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
