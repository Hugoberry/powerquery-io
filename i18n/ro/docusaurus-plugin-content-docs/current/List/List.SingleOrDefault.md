---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Returnează singurul element din listă pentru o listă de lungimea unu şi valoarea implicită pentru o listă necompletată.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Dacă există doar un element în lista <code>list</code>, returnează acel element.    Dacă lista este goală, funcția returnează nul dacă nu se specifică <code>default</code> opțional. Dacă există mai multe elemente în listă, funcția returnează o eroare.


## Examples

### Example #1 
Aflaţi singura valoare din lista \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Aflaţi singura valoare din lista \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Aflaţi singura valoare din lista \{}. Dacă lista este necompletată, se returnează -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
