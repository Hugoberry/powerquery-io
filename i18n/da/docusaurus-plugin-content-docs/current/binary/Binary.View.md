---
title: Binary.View
---

# Binary.View


Opretter eller udvider en binær med brugerdefinerede handlere for forespørgsler og handlinger.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Returnerer en visning af <code>binary</code>, hvor funktionerne, der er angivet i<code>handlers</code>, bruges i stedet for standardadfærden for en handling, når handlingen anvendes på visningen.<br />Hvis <code>binary</code> er angivet, er alle handlerfunktioner valgfrie. Hvis <code>binary</code> ikke er angivet, er handlerfunktionen <code>GetStream</code> påkrævet. Hvis en handlerfunktion ikke er angivet for en handling, anvendes standardadfærden for handlingen på <code>binary</code> i stedet (undtagen i tilfælde af <code>GetExpression</code>).<br />Handlerfunktioner skal returnere en værdi, der er semantisk ækvivalent med resultatet af at anvende handlingen imod <code>binary</code> (eller den resulterende opfattelse i tilfælde af <code>GetExpression</code>).<br />Hvis en handlerfunktion giver en fejl, anvendes standardadfærden for handlingen på visningen.<br /><code>Binary.View</code> kan bruges til at implementere foldning til en datakilde – oversættelsen af M-forespørgsler til kildespecifikke handlinger (for eksempel for at downloade en sektion af en fil).<br />Se den publicerede dokumentation til Power Query brugerdefinerede connector for en mere komplet beskrivelse af <code>Binary.View</code>.<br />


## Examples

### Example #1 
Opret en grundlæggende visning, der ikke kræver adgang til dataene for at bestemme længden.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
