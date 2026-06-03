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

Returnerar en vy över `binary` där de funktioner som specificerats i `handlers` används i stället för en åtgärds standardbeteende när åtgärden tillämpas på vyn.

Om `binary` anges, är alla hanteringsfunktioner valfria. Om `binary` inte anges krävs funktionerna `GetStream`. Om en hanterarfunktion inte är specificerad för en operation, tillämpas standardbeteendet för operationen på `binary` istället (förutom i fallet med `GetExpression`).

Hanterarfunktioner måste returnera ett värde som semantiskt motsvarar resultatet av att tillämpa åtgärden på `binary` (eller den resulterande vyn när det gäller `GetExpression`).

Om en hanterarfunktion meddelar ett fel tillämpas åtgärdens standardbeteende på vyn.

`Binary.View` kan användas för att implementera vikning på en datakälla – översättningen av M-frågor till källspecifika uppgifter (t.ex. för att skapa T-SQL-instruktioner från M-frågor).

En mer fullständig beskrivning av `Binary.View` finns i den publicerade dokumentationen.


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
