---
title: Number.Round
---

# Number.Round


Returnerer det afrundede tal. Antallet af cifre og afrundingstilstand kan angives.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerer resultatet af afrunding <code>number</code> til det nærmeste tal. Hvis <code>number</code> er null, <code>Number.Round</code> returnerer null.<br /><br />      Som standard afrundes <code>number</code> til det nærmeste heltal, og bindinger brydes ved at afrunde til det nærmeste lige tal (ved hjælp af <code>RoundingMode.ToEven</code>, også kendt som "bankers afrunding").<br />      <br />      Disse standarder kan dog tilsidesættes via følgende valgfrie parametre.      <ul>        <li><code>digits</code>: Medfører, at <code>number</code> afrundes til det angivne antal decimaler.</li>        <li><code>roundingMode</code>: Tilsidesætter standardbrydningsadfærden, når <code>number</code> er midtpunktet mellem to potentielle afrundede værdier      (se <code>RoundingMode.Type</code> for mulige værdier).</li>      </ul>


## Examples

### Example #1 
Afrunder 1,234 til det nærmeste heltal.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Afrunder 1,56 til det nærmeste heltal.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Afrund 1,2345 til to decimaler.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Afrund 1,2345 til tre decimaler (rund op).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Afrund 1,2345 til tre decimaler (rund ned).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
