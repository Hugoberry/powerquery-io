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

Returnerer en visning af `binary`, hvor funktionerne, der er angivet i`handlers`, bruges i stedet for standardadfærden for en handling, når handlingen anvendes på visningen.

Hvis `binary` er angivet, er alle handlerfunktioner valgfrie. Hvis `binary` ikke er angivet, er handlerfunktionen `GetStream` påkrævet. Hvis en handlerfunktion ikke er angivet for en handling, anvendes standardadfærden for handlingen på `binary` i stedet (undtagen i tilfælde af `GetExpression`).

Handlerfunktioner skal returnere en værdi, der er semantisk ækvivalent med resultatet af at anvende handlingen imod `binary` (eller den resulterende opfattelse i tilfælde af `GetExpression`).

Hvis en handlerfunktion giver en fejl, anvendes standardadfærden for handlingen på visningen.

`Binary.View` kan bruges til at implementere foldning til en datakilde – oversættelsen af M-forespørgsler til kildespecifikke handlinger (for eksempel for at downloade en sektion af en fil).

Se den publicerede dokumentation til Power Query brugerdefinerede connector for en mere komplet beskrivelse af `Binary.View`.


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
