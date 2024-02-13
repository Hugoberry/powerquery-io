---
title: Binary.View
---

# Binary.View


Skapar eller utvidgar en binär med användardefinierade hanterare för fråge- och åtgärdsåtgärder.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Returnerar en vy över <code>binary</code> där de funktioner som specificerats i <code>handlers</code> används i stället för en åtgärds standardbeteende när åtgärden tillämpas på vyn.<br />Om <code>binary</code> anges, är alla hanteringsfunktioner valfria. Om <code>binary</code> inte anges krävs funktionerna <code>GetStream</code>. Om en hanterarfunktion inte är specificerad för en operation, tillämpas standardbeteendet för operationen på <code>binary</code> istället (förutom i fallet med <code>GetExpression</code>).<br />Hanterarfunktioner måste returnera ett värde som semantiskt motsvarar resultatet av att tillämpa åtgärden på <code>binary</code> (eller den resulterande vyn när det gäller <code>GetExpression</code>).<br />Om en hanterarfunktion meddelar ett fel tillämpas åtgärdens standardbeteende på vyn.<br /><code>Binary.View</code> kan användas för att implementera vikning på en datakälla – översättningen av M-frågor till källspecifika uppgifter (t.ex. för att skapa T-SQL-instruktioner från M-frågor).<br />En mer fullständig beskrivning av <code>Binary.View</code> finns i den publicerade dokumentationen.<br />


## Examples

### Example #1 
Skapa en grundläggande vy som inte kräver åtkomst till data för att fastställa längden.
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
