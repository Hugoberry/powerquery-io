---
title: List.Random
---

# List.Random


Retourneert een lijst met willekeurige getallen.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Hiermee wordt een lijst met willekeurige getallen tussen 0 en 1 geretourneerd, met het aantal opgegeven waarden om te genereren en een optionele seedwaarde.<ul> <li><code>count</code>: het aantal willekeurige waarden om te genereren.</li> <li><code>seed</code>: <i>[Optioneel]</i> Een numerieke waarde die wordt gebruikt om de willekeurige getallengenerator te seeden. Als dit wordt weggelaten, wordt een unieke lijst met willekeurige getallen gegenereerd wanneer u de functie aanroept. Als u de seedwaarde met een getal opgeeft, wordt bij elke aanroep naar de functie dezelfde lijst met willekeurige getallen gegenereerd.</li></ul>


## Examples

### Example #1 
Een lijst met drie willekeurig getallen maken.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Een lijst met drie willekeurig getallen maken en daarvoor een basiswaarde opgeven.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
