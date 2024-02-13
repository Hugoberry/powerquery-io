---
title: List.Numbers
---

# List.Numbers


Returnerer en liste over tal med en indledende værdi for værdi, antal og valgfri forøgelse.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Returnerer en liste over tal med en indledende værdi for værdi, antal og valgfri forøgelse. Standardværdien for forøgelse er 1.<ul>   <li><code>start</code>: Den første værdi på listen.</li>   <li><code>count</code>: Det antal værdier, der skal oprettes.</li>   <li><code>increment</code>: <i>[Valgfrit]</i> Den værdi, der skal øges med. Hvis den udelades, øges værdier med 1.</li></ul>


## Examples

### Example #1 
Opret en liste over 10 tal efter hinanden, som starter med 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Opret en liste over 10 tal, der starter med 1 med en forøgelse på 2 for hvert efterfølgende tal.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
