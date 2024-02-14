---
title: List.Random
---

# List.Random


Returnerar en lista med slumptal.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Returnerar en lista med slumptal mellan 0 och 1, baserat på antalet värden som ska genereras och ett valfritt startvärde.<ul>   <li><code>count</code>: Antalet slumpvärden som ska genereras.</li>   <li><code>seed</code>:  <i>[Valfritt]</i> Ett numeriskt värde som används som startvärde för slumptalsgeneratorn. Om inget anges genereras en unik lista med slumptal varje gång du anropar funktionen. Om du anger startvärdet med ett tal genererar varje anrop till funktionen samma lista med slumptal.</li></ul>


## Examples

### Example #1 
Skapa en lista med 3 slumptal.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Skapa en lista med 3 slumptal och ange ett startvärde.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
